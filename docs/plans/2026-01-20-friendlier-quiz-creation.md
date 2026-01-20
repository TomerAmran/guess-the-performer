# Friendlier Quiz Creation (Single-Page Builder) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the multi-step quiz creation flow with a single-page builder that starts with piece name, uses searchable composer/artist pickers (with inline create + optional photo URL), and provides YouTube “play clip” preview to pick/validate each slice’s start time.

**Architecture:** Keep the backend schema and `quiz.create` API unchanged (still exactly 3 slices). Implement a new single-page UI in `src/app/quiz/create/page.tsx` using small reusable client components/hooks under `src/app/quiz/create/_components/` to avoid duplicating picker + YouTube clip-preview logic.

**Tech Stack:** Next.js App Router, React, tRPC, Prisma (SQLite), Tailwind CSS, YouTube IFrame Player API.

---

### Constraints / non-goals (for this iteration)
- **Exactly 3 slices** (UI enforces 3; no “add/remove slice” yet).
- **No schema migration** and **no changes to** `src/server/api/routers/quiz.ts` validation.
- Composer/artist “search” is **client-side filtering** over `getAll` results (fast enough for current data sizes).

---

### Task 0: Create plan/docs folder (repo hygiene)

**Files:**
- Create: `docs/plans/2026-01-20-friendlier-quiz-creation.md` (this file)

**Step 1: Verify folder exists**
- Run: `ls docs/plans`
- Expected: file visible

**Step 2: Commit**

```bash
git add docs/plans/2026-01-20-friendlier-quiz-creation.md
git commit -m "docs: plan friendlier quiz creation flow"
```

---

### Task 1: Extract YouTube helpers into a shared util

**Why:** Both quiz play (`src/app/quiz/[id]/page.tsx`) and create need YouTube ID parsing and consistent URL validation.

**Files:**
- Create: `src/app/_components/youtube.ts`
- Modify: `src/app/quiz/[id]/page.tsx`

**Step 1: Add util module**

Create `src/app/_components/youtube.ts` with:
- `getYouTubeId(url: string): string | null`
- `isValidYouTubeUrl(url: string): boolean` (simple wrapper using `getYouTubeId`)

**Step 2: Switch quiz play page to import util**
- Replace the local `getYouTubeId` function with an import from `src/app/_components/youtube.ts`.

**Step 3: Typecheck**
- Run: `npm run typecheck`
- Expected: PASS

**Step 4: Commit**

```bash
git add src/app/_components/youtube.ts src/app/quiz/[id]/page.tsx
git commit -m "refactor: share YouTube URL parsing helpers"
```

---

### Task 2: Build a reusable searchable select with inline “create” support

**Why:** We need this twice (composer picker; artist picker per slice), and we want consistent behavior.

**Files:**
- Create: `src/app/quiz/create/_components/SearchableSelect.tsx`

**Component API (suggested):**
- Props:
  - `label: string`
  - `items: Array<{ id: string; name: string; photoUrl?: string | null }>`
  - `valueId: string`
  - `onChange: (id: string) => void`
  - `placeholder?: string`
  - `isLoading?: boolean`
  - `emptyText?: string` (shown when no items match filter)
  - `createLabel?: string` (e.g. “Add artist”)
  - `onCreate?: (input: { name: string; photoUrl?: string }) => Promise<{ id: string }>`

**UX details:**
- Input box for filtering (case-insensitive).
- List of matches; click selects.
- If no matches and `onCreate` is provided, show “Add …” action.
- “Add …” opens inline mini-form:
  - Name (required)
  - Photo URL (optional)
  - Small image preview if photo URL is non-empty
  - Save/Cancel; Save disabled while mutation pending
- After create succeeds: auto-select the created item and clear filter.

**Step 1: Implement component (minimal)**
- Implement filtering + selection.

**Step 2: Implement inline create**
- The component should not know about tRPC; it calls `onCreate`.

**Step 3: Lint**
- Run: `npm run lint`
- Expected: PASS

**Step 4: Commit**

```bash
git add src/app/quiz/create/_components/SearchableSelect.tsx
git commit -m "feat: searchable select with inline create"
```

---

### Task 3: Build a YouTube “Play clip” preview widget for picking `startTime`

**Goal:** For each slice, once a YouTube URL is valid, show an embedded player with:
- “Play clip” that starts at `startTime` and auto-stops after `duration` seconds (the chosen option A).
- “Use current time” button to set `startTime` from current playback time.
- Basic feedback (loading/ready, and maybe current time display).

**Files:**
- Create: `src/app/quiz/create/_components/YouTubeClipPicker.tsx`
- Reuse: `src/app/_components/youtube.ts`

**Implementation notes:**
- Use the YouTube IFrame API (similar to `src/app/quiz/[id]/page.tsx`):
  - Load `https://www.youtube.com/iframe_api` once (guarded).
  - Create a player per slice widget instance (unique DOM id).
- Provide a small, predictable API:
  - Props: `{ youtubeUrl: string; startTime: number; duration: number; onChangeStartTime: (sec: number) => void }`
- Clip behavior:
  - On “Play clip”: `seekTo(startTime)` then `playVideo()` then `setTimeout(pauseVideo, duration*1000)`.
  - On “Use current time”: `Math.floor(player.getCurrentTime())` → `onChangeStartTime`.
- Cleanup: destroy player on unmount or when video ID changes.

**Step 1: Implement widget**

**Step 2: Smoke test locally**
- Run: `npm run dev`
- Navigate: `/quiz/create`
- Paste a YouTube link and confirm the embed loads, “Play clip” auto-stops, “Use current time” updates the field.

**Step 3: Commit**

```bash
git add src/app/quiz/create/_components/YouTubeClipPicker.tsx
git commit -m "feat: YouTube clip picker for slice start time"
```

---

### Task 4: Replace the current multi-step quiz create page with the new single-page builder

**Files:**
- Modify: `src/app/quiz/create/page.tsx`
- Create: `src/app/quiz/create/_components/SliceCard.tsx` (optional but recommended)

**Step 1: Define state**
- `pieceName: string`
- `composerId: string`
- `duration: number`
- `slices: Array<{ artistId: string; youtubeUrl: string; startTime: number }>` initialized to length 3

**Step 2: Fetch data**
- `api.composer.getAll.useQuery()`
- `api.artist.getAll.useQuery()`
- Mutations:
  - `api.composer.create.useMutation()`
  - `api.artist.create.useMutation()`
  - `api.quiz.create.useMutation()`

**Step 3: Build the form**
- Top: Piece name input + composer `SearchableSelect` with inline create.
- Middle: 3 slice cards (map over `slices`), each includes:
  - Artist `SearchableSelect` with inline create (name + optional photo URL).
  - YouTube URL input.
  - Start time numeric input.
  - `YouTubeClipPicker` shown only when URL is valid.
- Bottom: “Create quiz” button with clear disabled state.

**Step 4: Validation**
- `pieceName.trim().length > 0`
- `composerId` set
- For each slice:
  - `artistId` set
  - YouTube URL valid (use `isValidYouTubeUrl`)
  - `startTime >= 0`
- Keep server constraints in mind:
  - `duration` 5–120
  - slices length = 3

**Step 5: Submit**
- Call `quiz.create.mutate({ composerId, pieceName, duration, slices })`
- On success: reuse your existing success UI (or redirect to the quiz page if you prefer later).
- On error: keep current `alert(...)` behavior for now.

**Step 6: Typecheck + lint**
- Run: `npm run check`
- Expected: PASS

**Step 7: Commit**

```bash
git add src/app/quiz/create/page.tsx src/app/quiz/create/_components/SliceCard.tsx
git commit -m "feat: single-page quiz builder with inline create and clip preview"
```

---

### Task 5: Manual QA checklist (must-pass)

**Run:** `npm run dev`

- **Composer**
  - Search filters list
  - Selecting works
  - Inline add composer (name required, photo URL optional) creates and selects
- **Artist**
  - Search filters list (per slice)
  - Inline add artist creates and selects (per slice)
  - Photo URL preview shows if provided
- **YouTube + start time**
  - Paste URL → embed loads
  - “Use current time” updates start time
  - “Play clip” starts at start time and stops after duration
  - Changing URL swaps the embedded video cleanly (no stuck playback)
- **Submit**
  - Button disabled until all required fields valid
  - Create quiz succeeds when logged in
  - Newly created quiz playable at `/quiz/[id]` (existing flow)

---

### Task 6 (optional, later): Server-side search endpoints

If lists grow, add:
- `composer.search({ query })`
- `artist.search({ query })`

This should be a separate PR; the UI component API can remain identical.

