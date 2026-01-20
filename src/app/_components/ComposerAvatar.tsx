"use client";

import { useState } from "react";

interface ComposerAvatarProps {
  name: string;
  photoUrl: string | null;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8 w-8 text-sm",
  md: "h-12 w-12 text-lg",
  lg: "h-16 w-16 text-2xl",
};

export function ComposerAvatar({ name, photoUrl, size = "lg" }: ComposerAvatarProps) {
  const [imgError, setImgError] = useState(false);

  if (!photoUrl || imgError) {
    return (
      <div 
        className={`${sizeClasses[size]} rounded-full bg-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] flex-shrink-0`}
        style={{ fontFamily: 'var(--font-body), serif', fontWeight: 600 }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img 
      src={photoUrl} 
      alt={name}
      className={`${sizeClasses[size]} rounded-full object-cover bg-[var(--color-border)] flex-shrink-0`}
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
    />
  );
}
