"use client";

import { useState, useRef, useEffect } from "react";
import { useToast } from "~/app/_components/ToastProvider";

type Item = { id: string; name: string; photoUrl?: string | null };

type SearchableSelectProps = {
  label: string;
  items: Item[];
  valueId: string;
  onChange: (id: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  emptyText?: string;
  createLabel?: string;
  onCreate?: (input: { name: string; photoUrl?: string }) => Promise<{ id: string }>;
  allowClear?: boolean;
};

export function SearchableSelect({ label, items, valueId, onChange, placeholder = "Search...", isLoading = false, emptyText = "No items found", createLabel = "Add new", onCreate, allowClear = false }: SearchableSelectProps) {
  const [filter, setFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { showError } = useToast();

  const selectedItem = items.find((item) => item.id === valueId);
  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCreate = async () => {
    if (!onCreate || !newName.trim()) return;
    setIsCreating(true);
    try {
      const created = await onCreate({ name: newName.trim(), photoUrl: newPhotoUrl.trim() || undefined });
      onChange(created.id);
      setShowCreateForm(false); setShowDropdown(false); setNewName(""); setNewPhotoUrl(""); setFilter("");
    } catch (error) {
      showError(error instanceof Error ? error.message : "Failed to create");
    } finally {
      setIsCreating(false);
    }
  };

  if (showCreateForm) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 p-4">
        <h3 className="font-body-semibold mb-3 font-medium text-[var(--color-text-primary)]">{createLabel}</h3>
        <div className="space-y-3">
          <div>
            <label className="font-body-medium block text-sm text-[var(--color-text-secondary)] mb-1">Name <span className="text-[var(--color-error)]">*</span></label>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter name" className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-3 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" autoFocus />
          </div>
          <div>
            <label className="font-body-medium block text-sm text-[var(--color-text-secondary)] mb-1">Photo URL (optional)</label>
            <input type="url" value={newPhotoUrl} onChange={(e) => setNewPhotoUrl(e.target.value)} placeholder="https://..." className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-3 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none" />
            {newPhotoUrl.trim() && <div className="mt-2"><img src={newPhotoUrl} alt="Preview" className="h-16 w-16 rounded-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div>}
          </div>
          <div className="flex gap-2">
            <button onClick={handleCreate} disabled={!newName.trim() || isCreating} className="font-body-semibold flex-1 rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 font-medium text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-50">{isCreating ? "Creating..." : "Create"}</button>
            <button onClick={() => { setShowCreateForm(false); setNewName(""); setNewPhotoUrl(""); }} disabled={isCreating} className="font-body-semibold flex-1 rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-border)] disabled:opacity-50">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="font-body-semibold block text-sm font-medium text-[var(--color-text-secondary)] mb-2">{label}</label>

      {isLoading ? (
        <div className="flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-[var(--color-accent-gold)] border-t-transparent" />
        </div>
      ) : (
        <>
          <button type="button" onClick={() => setShowDropdown(!showDropdown)} className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] px-4 py-3 text-left text-[var(--color-text-primary)] hover:border-[var(--color-accent-gold)] focus:border-[var(--color-accent-gold)] focus:outline-none flex items-center justify-between">
            {selectedItem ? (
              <div className="flex items-center gap-3 flex-1">
                {selectedItem.photoUrl ? (
                  <img src={selectedItem.photoUrl} alt={selectedItem.name} className="h-6 w-6 rounded-full object-cover bg-[var(--color-border)]" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                ) : (
                  <div className="font-body-semibold h-6 w-6 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] text-xs font-medium">{selectedItem.name.charAt(0).toUpperCase()}</div>
                )}
                <span className="font-medium">{selectedItem.name}</span>
              </div>
            ) : (
              <span className="text-[var(--color-text-placeholder)]">{placeholder}</span>
            )}
            <div className="flex items-center gap-2">
              {allowClear && selectedItem && <button type="button" onClick={(e) => { e.stopPropagation(); onChange(""); setShowDropdown(false); }} className="text-[var(--color-text-placeholder)] hover:text-[var(--color-error)] transition-colors">✕</button>}
              <svg className={`h-5 w-5 text-[var(--color-text-placeholder)] transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>

          {showDropdown && (
            <div className="absolute z-50 mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-input)] shadow-xl">
              <div className="p-2 border-b border-[var(--color-border)]">
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Type to search..." className="font-body-medium w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-placeholder)] focus:border-[var(--color-accent-gold)] focus:outline-none text-sm" autoFocus />
              </div>
              <div className="max-h-64 overflow-y-auto">
                {filteredItems.length > 0 ? (
                  <div className="divide-y divide-[var(--color-border)]">
                    {filteredItems.map((item) => (
                      <button key={item.id} type="button" onClick={() => { onChange(item.id); setFilter(""); setShowDropdown(false); }} className="font-body-medium flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-bg-card)]">
                        {item.photoUrl ? (
                          <img src={item.photoUrl} alt={item.name} className="h-8 w-8 rounded-full object-cover bg-[var(--color-border)]" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                        ) : (
                          <div className="font-body-semibold h-8 w-8 rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] text-sm font-medium">{item.name.charAt(0).toUpperCase()}</div>
                        )}
                        <span className="font-medium text-[var(--color-text-primary)]">{item.name}</span>
                        {item.id === valueId && <svg className="ml-auto h-5 w-5 text-[var(--color-accent-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="font-body-medium mb-3 text-sm text-[var(--color-text-muted)]">{emptyText}</p>
                    {onCreate && <button type="button" onClick={() => { setNewName(filter); setShowCreateForm(true); setShowDropdown(false); }} className="font-body-semibold rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-medium text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]">{createLabel}</button>}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
