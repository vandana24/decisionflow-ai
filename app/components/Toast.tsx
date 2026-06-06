"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string | null;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
};

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const colorMap = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg text-white flex items-center gap-3 ${colorMap[type]}`}
    >
      <span>{message}</span>

      <button className="font-bold" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}