"use client";

import { formatTimeAgo } from "~/lib/time";
import { CommentActionsMenu } from "./CommentActionsMenu";

type CommentUser = {
  id: string;
  name: string | null;
  image: string | null;
};

type Reply = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  user: CommentUser;
};

type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  user: CommentUser;
  replies?: Reply[];
};

type CommentItemProps = {
  comment: Comment;
  currentUserId: string | undefined;
  isAuthenticated: boolean;
  openMenuId: string | null;
  editingCommentId: string | null;
  editText: string;
  replyingToId: string | null;
  replyText: string;
  isUpdating: boolean;
  isDeleting: boolean;
  isAddingComment: boolean;
  updateError: string | null;
  onToggleMenu: (id: string | null) => void;
  onStartEdit: (id: string, content: string) => void;
  onCancelEdit: () => void;
  onSaveEdit: (id: string) => void;
  onEditTextChange: (text: string) => void;
  onDelete: (id: string) => void;
  onToggleReply: (id: string | null) => void;
  onReplyTextChange: (text: string) => void;
  onSubmitReply: (parentId: string) => void;
};

function UserAvatar({
  image,
  name,
  size = "md",
}: {
  image: string | null;
  name: string | null;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "h-6 w-6 text-xs" : "h-8 w-8 text-sm";

  if (image) {
    return (
      <img
        src={image}
        alt={name ?? "User"}
        className={`${sizeClasses} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`flex ${sizeClasses} items-center justify-center rounded-full bg-[var(--color-border)] text-[var(--color-text-muted)]`}
    >
      {(name ?? "U")[0]?.toUpperCase()}
    </div>
  );
}

function EditForm({
  text,
  onChange,
  onCancel,
  onSave,
  isUpdating,
  error,
}: {
  text: string;
  onChange: (text: string) => void;
  onCancel: () => void;
  onSave: () => void;
  isUpdating: boolean;
  error: string | null;
}) {
  return (
    <div className="mb-3">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        maxLength={1000}
        className="font-body w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:outline-none"
        rows={3}
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          {text.length}/1000
        </span>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="font-body rounded px-3 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!text.trim() || isUpdating}
            className="font-body rounded bg-[var(--color-accent-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-gold-hover)] disabled:opacity-50"
          >
            {isUpdating ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-xs text-[var(--color-error)]">{error}</p>
      )}
    </div>
  );
}

function ReplyForm({
  text,
  onChange,
  onCancel,
  onSubmit,
  isSubmitting,
}: {
  text: string;
  onChange: (text: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  return (
    <div className="mt-3 border-l-2 border-[var(--color-border)] pl-4">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a reply..."
        maxLength={1000}
        className="font-body w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-2 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:outline-none"
        rows={2}
      />
      <div className="mt-2 flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="font-body rounded px-3 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          disabled={!text.trim() || isSubmitting}
          className="font-body rounded bg-[var(--color-accent-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-gold-hover)] disabled:opacity-50"
        >
          Reply
        </button>
      </div>
    </div>
  );
}

export function CommentItem({
  comment,
  currentUserId,
  isAuthenticated,
  openMenuId,
  editingCommentId,
  editText,
  replyingToId,
  replyText,
  isUpdating,
  isDeleting,
  isAddingComment,
  updateError,
  onToggleMenu,
  onStartEdit,
  onCancelEdit,
  onSaveEdit,
  onEditTextChange,
  onDelete,
  onToggleReply,
  onReplyTextChange,
  onSubmitReply,
}: CommentItemProps) {
  const isOwner = currentUserId === comment.user.id;
  const isEditing = editingCommentId === comment.id;
  const isReplying = replyingToId === comment.id;
  const wasEdited =
    comment.updatedAt &&
    new Date(comment.updatedAt).getTime() !==
      new Date(comment.createdAt).getTime();

  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4">
      {/* Comment Header */}
      <div className="mb-2 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <UserAvatar image={comment.user.image} name={comment.user.name} />
          <div>
            <span className="font-body text-sm font-semibold text-[var(--color-text-primary)]">
              {comment.user.name ?? "Anonymous"}
            </span>
            <span className="font-body ml-2 text-xs text-[var(--color-text-muted)]">
              {formatTimeAgo(comment.createdAt)}
            </span>
          </div>
        </div>
        {isOwner && (
          <CommentActionsMenu
            isOpen={openMenuId === comment.id}
            onToggle={() =>
              onToggleMenu(openMenuId === comment.id ? null : comment.id)
            }
            onEdit={() => {
              onStartEdit(comment.id, comment.content);
              onToggleMenu(null);
            }}
            onDelete={() => {
              onDelete(comment.id);
              onToggleMenu(null);
            }}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
          />
        )}
      </div>

      {/* Comment Content */}
      {isEditing ? (
        <EditForm
          text={editText}
          onChange={onEditTextChange}
          onCancel={onCancelEdit}
          onSave={() => onSaveEdit(comment.id)}
          isUpdating={isUpdating}
          error={updateError}
        />
      ) : (
        <p className="font-body mb-3 text-sm whitespace-pre-wrap text-[var(--color-text-primary)]">
          {comment.content}
          {wasEdited && (
            <span className="ml-2 text-xs text-[var(--color-text-muted)]">
              (edited)
            </span>
          )}
        </p>
      )}

      {/* Reply Button */}
      {isAuthenticated && !isEditing && (
        <button
          onClick={() => onToggleReply(isReplying ? null : comment.id)}
          className="font-body text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)]"
        >
          {isReplying ? "Cancel" : "Reply"}
        </button>
      )}

      {/* Reply Form */}
      {isReplying && (
        <ReplyForm
          text={replyText}
          onChange={onReplyTextChange}
          onCancel={() => {
            onToggleReply(null);
            onReplyTextChange("");
          }}
          onSubmit={() => onSubmitReply(comment.id)}
          isSubmitting={isAddingComment}
        />
      )}

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 space-y-3 border-l-2 border-[var(--color-border)] pl-4">
          {comment.replies.map((reply) => {
            const isReplyOwner = currentUserId === reply.user.id;
            const isEditingReply = editingCommentId === reply.id;
            const replyWasEdited =
              reply.updatedAt &&
              new Date(reply.updatedAt).getTime() !==
                new Date(reply.createdAt).getTime();

            return (
              <div
                key={reply.id}
                className="rounded-lg bg-[var(--color-bg-card)] p-3"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <UserAvatar
                      image={reply.user.image}
                      name={reply.user.name}
                      size="sm"
                    />
                    <span className="font-body text-xs font-semibold text-[var(--color-text-primary)]">
                      {reply.user.name ?? "Anonymous"}
                    </span>
                    <span className="font-body text-xs text-[var(--color-text-muted)]">
                      {formatTimeAgo(reply.createdAt)}
                    </span>
                  </div>
                  {isReplyOwner && (
                    <CommentActionsMenu
                      isOpen={openMenuId === reply.id}
                      onToggle={() =>
                        onToggleMenu(openMenuId === reply.id ? null : reply.id)
                      }
                      onEdit={() => {
                        onStartEdit(reply.id, reply.content);
                        onToggleMenu(null);
                      }}
                      onDelete={() => {
                        onDelete(reply.id);
                        onToggleMenu(null);
                      }}
                      isUpdating={isUpdating}
                      isDeleting={isDeleting}
                      size="sm"
                    />
                  )}
                </div>
                {isEditingReply ? (
                  <EditForm
                    text={editText}
                    onChange={onEditTextChange}
                    onCancel={onCancelEdit}
                    onSave={() => onSaveEdit(reply.id)}
                    isUpdating={isUpdating}
                    error={updateError}
                  />
                ) : (
                  <p className="font-body text-sm whitespace-pre-wrap text-[var(--color-text-primary)]">
                    {reply.content}
                    {replyWasEdited && (
                      <span className="ml-2 text-xs text-[var(--color-text-muted)]">
                        (edited)
                      </span>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
