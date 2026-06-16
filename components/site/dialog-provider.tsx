"use client";

import * as React from "react";
import { X } from "lucide-react";

type DialogContextValue = {
  openDialog: (content: React.ReactNode) => void;
  closeDialog: () => void;
};

const DialogContext = React.createContext<DialogContextValue | null>(null);

export function useDialog() {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within <DialogProvider>");
  return ctx;
}

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [content, setContent] = React.useState<React.ReactNode>(null);

  const closeDialog = React.useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;
    // Pause any playing videos so audio stops as the dialog closes.
    dialog.querySelectorAll("video").forEach((v) => v.pause());
    dialog.classList.remove("is-open");

    const finish = () => {
      dialog.removeEventListener("transitionend", onEnd);
      if (dialog.open) dialog.close();
      document.body.classList.remove("dialog-open");
      setContent(null);
    };
    const onEnd = (e: TransitionEvent) => {
      if (e.target === dialog) finish();
    };
    dialog.addEventListener("transitionend", onEnd);
    // Safety fallback if transitionend doesn't fire.
    window.setTimeout(finish, 400);
  }, []);

  const openDialog = React.useCallback((node: React.ReactNode) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    setContent(node);
    if (contentRef.current) contentRef.current.scrollTop = 0;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    requestAnimationFrame(() => dialog.classList.add("is-open"));
  }, []);

  const value = React.useMemo(
    () => ({ openDialog, closeDialog }),
    [openDialog, closeDialog],
  );

  return (
    <DialogContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        className="exp-dialog"
        aria-labelledby="exp-dialog-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDialog();
        }}
        onCancel={(e) => {
          // Intercept native ESC close so we can run the exit animation.
          e.preventDefault();
          closeDialog();
        }}
      >
        <button
          className="dialog-close"
          type="button"
          aria-label="Close details"
          onClick={closeDialog}
        >
          <X strokeWidth={1.8} aria-hidden="true" />
        </button>
        <div className="dialog-content" ref={contentRef}>
          {content}
        </div>
      </dialog>
    </DialogContext.Provider>
  );
}
