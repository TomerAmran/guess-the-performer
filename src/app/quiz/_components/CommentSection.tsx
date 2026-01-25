"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import { CommentItem } from "./CommentItem";

type CommentSectionProps = {
  quizId: string;
  onSignIn: () => void;
};

export function CommentSection({ quizId, onSignIn }: CommentSectionProps) {
  const { data: session } = useSession();
  const utils = api.useUtils();

  // Comments query
  const {
    data: commentsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = api.comment.getComments.useInfiniteQuery(
    { quizId, limit: 20 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      enabled: !!quizId,
    },
  );

  // Mutations
  const addCommentMutation = api.comment.addComment.useMutation({
    onSuccess: () => {
      setCommentText("");
      setReplyText("");
      setReplyingTo(null);
      void utils.comment.getComments.invalidate({ quizId });
    },
  });

  const deleteCommentMutation = api.comment.deleteComment.useMutation({
    onSuccess: () => {
      void utils.comment.getComments.invalidate({ quizId });
    },
  });

  const updateCommentMutation = api.comment.updateComment.useMutation({
    onSuccess: () => {
      setEditingComment(null);
      setEditText("");
      void utils.comment.getComments.invalidate({ quizId });
    },
  });

  // Local state
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    if (openMenuId) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openMenuId]);

  const isAuthenticated = !!session?.user;
  const comments = commentsData?.pages.flatMap((page) => page.comments) ?? [];

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      await addCommentMutation.mutateAsync({
        quizId,
        content: commentText.trim(),
      });
    } catch {
      // Error is handled by mutation state
    }
  };

  const handleAddReply = async (parentId: string) => {
    if (!replyText.trim()) return;
    try {
      await addCommentMutation.mutateAsync({
        quizId,
        content: replyText.trim(),
        parentId,
      });
    } catch {
      // Error is handled by mutation state
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteCommentMutation.mutateAsync({ commentId });
    } catch {
      // Error is handled by mutation state
    }
  };

  const handleUpdateComment = async (commentId: string) => {
    if (!editText.trim()) return;
    try {
      await updateCommentMutation.mutateAsync({
        commentId,
        content: editText.trim(),
      });
    } catch {
      // Error is handled by mutation state
    }
  };

  const handleStartEdit = (commentId: string, currentContent: string) => {
    setEditingComment(commentId);
    setEditText(currentContent);
    setReplyingTo(null);
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
    setEditText("");
  };

  return (
    <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/60 p-6">
      <h3 className="font-body mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
        Discussion
      </h3>
      <p className="font-body mb-4 text-sm text-[var(--color-text-muted)]">
        Share your thoughts! Why did you think one performer was another?
      </p>

      {/* Comment Form */}
      {isAuthenticated ? (
        <form onSubmit={handleAddComment} className="mb-6">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts about this quiz..."
            maxLength={1000}
            className="font-body w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)] focus:outline-none"
            rows={3}
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-[var(--color-text-muted)]">
              {commentText.length}/1000
            </span>
            <button
              type="submit"
              disabled={!commentText.trim() || addCommentMutation.isPending}
              className="font-body rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {addCommentMutation.isPending ? "Posting..." : "Post Comment"}
            </button>
          </div>
          {addCommentMutation.error && (
            <p className="mt-2 text-sm text-[var(--color-error)]">
              {addCommentMutation.error.message}
            </p>
          )}
        </form>
      ) : (
        <div className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4 text-center">
          <p className="font-body mb-2 text-sm text-[var(--color-text-muted)]">
            Sign in to join the discussion
          </p>
          <button
            onClick={onSignIn}
            className="font-body rounded-lg bg-[var(--color-accent-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-bg-primary)] transition-all hover:bg-[var(--color-accent-gold-hover)]"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="font-body py-4 text-center text-sm text-[var(--color-text-muted)]">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              currentUserId={session?.user?.id}
              isAuthenticated={isAuthenticated}
              openMenuId={openMenuId}
              editingCommentId={editingComment}
              editText={editText}
              replyingToId={replyingTo}
              replyText={replyText}
              isUpdating={updateCommentMutation.isPending}
              isDeleting={deleteCommentMutation.isPending}
              isAddingComment={addCommentMutation.isPending}
              updateError={updateCommentMutation.error?.message ?? null}
              onToggleMenu={setOpenMenuId}
              onStartEdit={handleStartEdit}
              onCancelEdit={handleCancelEdit}
              onSaveEdit={handleUpdateComment}
              onEditTextChange={setEditText}
              onDelete={handleDeleteComment}
              onToggleReply={setReplyingTo}
              onReplyTextChange={setReplyText}
              onSubmitReply={handleAddReply}
            />
          ))
        )}

        {/* Load More Button */}
        {hasNextPage && (
          <div className="text-center">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="font-body rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-border)] disabled:opacity-50"
            >
              {isFetchingNextPage ? "Loading..." : "Load more comments"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
