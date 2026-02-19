"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export function FullScreenLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="relative h-48 w-48 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeDasharray="1 4"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </svg>
      </div>
    </motion.div>,
    document.body,
  );
}
