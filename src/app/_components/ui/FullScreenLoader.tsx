"use client";

import { motion } from "framer-motion";

export function FullScreenLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
    </motion.div>
  );
}
