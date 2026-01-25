"use client";

import {
  EditIcon,
  DeleteIcon,
  MoreVerticalIcon,
} from "~/app/_components/Icons";

type CommentActionsMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
  isUpdating: boolean;
  isDeleting: boolean;
  size?: "sm" | "md";
};

export function CommentActionsMenu({
  isOpen,
  onToggle,
  onEdit,
  onDelete,
  isUpdating,
  isDeleting,
  size = "md",
}: CommentActionsMenuProps) {
  const iconSize = size === "sm" ? 14 : 16;
  const menuTop = size === "sm" ? "top-7" : "top-8";

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="rounded p-1 text-[var(--color-text-muted)] hover:bg-[var(--color-border)] hover:text-[var(--color-text-primary)]"
      >
        <MoreVerticalIcon size={iconSize} />
      </button>
      {isOpen && (
        <div
          className={`absolute ${menuTop} right-0 z-10 min-w-[120px] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] py-1 shadow-lg`}
        >
          <button
            onClick={onEdit}
            disabled={isUpdating}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
          >
            <EditIcon />
            Edit
          </button>
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[var(--color-error)] hover:bg-[var(--color-border)]"
          >
            <DeleteIcon />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
