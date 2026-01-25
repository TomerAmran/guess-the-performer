"use client";

import { useState } from "react";

type ShareButtonProps = {
  quizId: string;
  variant?: "icon" | "button" | "inline";
  className?: string;
};

export function ShareButton({ quizId, variant = "button", className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/quiz/${quizId}`;
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          alert(`Copy this link: ${url}`);
        }
        document.body.removeChild(textArea);
      }
    } catch {
      alert(`Copy this link: ${url}`);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleShare}
        className={`flex items-center justify-center rounded-lg p-2 transition-all hover:bg-[var(--color-border)] ${className}`}
        aria-label="Share quiz"
        title="Share quiz"
      >
        {copied ? (
          <span className="text-xl text-[var(--color-success)]">✓</span>
        ) : (
          <span className="text-xl">📤</span>
        )}
      </button>
    );
  }

  if (variant === "inline") {
    return (
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-[var(--color-border)] ${className}`}
        aria-label="Share quiz"
      >
        {copied ? (
          <>
            <span className="text-[var(--color-success)]">✓</span>
            <span className="text-[var(--color-success)]">Copied!</span>
          </>
        ) : (
          <>
            <span>📤</span>
            <span>Share</span>
          </>
        )}
      </button>
    );
  }

  // variant === "button"
  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium transition-all hover:border-[var(--color-accent-gold)] hover:bg-[var(--color-border)] ${className}`}
      aria-label="Share quiz"
    >
      {copied ? (
        <>
          <span className="text-xl text-[var(--color-success)]">✓</span>
          <span className="text-[var(--color-success)]">Link Copied!</span>
        </>
      ) : (
        <>
          <span className="text-xl">📤</span>
          <span>Share Quiz</span>
        </>
      )}
    </button>
  );
}
