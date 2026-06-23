import React from "react";
import { motion } from "framer-motion";
import { Heart, Clock, XCircle } from "lucide-react";
import { config } from "../config";
import { Ornament } from "./Ornament";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

const statIcons = {
  confirmed: Heart,
  hold: Clock,
  cancelled: XCircle
};

// Progress bar item
export function StatProgressBar({ label, value, icon: Icon }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm font-semibold text-navyGray">
        <span className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-primaryDeep" />}
          {label}
        </span>
        <span>{value}%</span>
      </div>
      <div className="h-3 rounded-full bg-primarySoft ring-1 ring-borderSoft">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primaryDark to-ribbonDark"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// Main Interactions Stats Section
export function Interactions() {
  const { stats } = config;

  return (
    <section
      id="interactions"
      className="relative overflow-hidden bg-primarySoft py-20 sm:py-24"
    >
      {/* Decorative Ornaments */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-10 z-0 hidden opacity-25 md:block"
      >
        <Ornament />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-28 bottom-0 z-0 hidden opacity-25 md:block"
      >
        <Ornament position="right" />
      </motion.div>

      {/* Decorative Gradients & Lines */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/35 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <Card className="relative overflow-hidden bg-white/90">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left side text */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
            >
              <SectionHeader
                title="Interactions"
                subtitle="Thank you for your interactions. You made our big day special and unforgettable."
                centered={false}
              />
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-20 bg-gold" />
                <Heart size={16} className="fill-gold text-gold" />
                <span className="h-px w-20 bg-gold" />
              </div>
              <p className="mt-6 max-w-md text-sm leading-7 text-mutedText">
                Every confirmation, message, and response helps us prepare a
                beautiful celebration for all our loved ones.
              </p>
            </motion.div>

            {/* Right side stats list */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="space-y-8"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="rounded-3xl border border-borderSoft bg-white/80 p-5 shadow-card backdrop-blur"
                >
                  <StatProgressBar
                    label={stat.label}
                    value={stat.value}
                    icon={statIcons[stat.type]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
export default Interactions;
