"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type ToastType = "success" | "error";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, type, message }]);
    
    // Auto-remove after 4 seconds
    setTimeout(() => removeToast(id), 4000);
  }, [removeToast]);

  const showSuccess = useCallback((message: string) => {
    addToast("success", message);
  }, [addToast]);

  const showError = useCallback((message: string) => {
    addToast("error", message);
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ showSuccess, showError }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`font-body-medium flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg transition-all animate-in slide-in-from-right-5 ${
              toast.type === "success"
                ? "bg-[var(--color-success)] text-white"
                : "bg-[var(--color-error)] text-white"
            }`}
          >
            <span className="text-lg">
              {toast.type === "success" ? "✓" : "✕"}
            </span>
            <span className="max-w-xs">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 rounded p-1 hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
