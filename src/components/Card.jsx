import React from "react";
import { motion } from "framer-motion";

export function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay }}
      className={`glass-panel rounded-[2rem] p-6 shadow-card sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
