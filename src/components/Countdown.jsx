import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { config } from "../config";

function getCountdownValues(targetDate) {
  const targetTime = new Date(targetDate).getTime();
  const difference = Math.max(targetTime - Date.now(), 0);
  return {
    Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((difference / (1000 * 60)) % 60),
    Seconds: Math.floor((difference / 1000) % 60)
  };
}

function getCountdownStatusText(days) {
  if (days > 1) {
    return `${days} Days To Go`;
  } else if (days === 1) {
    return `1 Day To Go`;
  } else {
    return `Today Is The Day`;
  }
}

export function Countdown() {
  const { event, couple } = config;
  const [timeLeft, setTimeLeft] = useState(
    useMemo(() => getCountdownValues(event.targetDate), [event.targetDate])
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getCountdownValues(event.targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [event.targetDate]);

  const countdownItems = [
    { label: "Days", value: timeLeft.Days, image: "/assets/couple-CzA0eK6B.jpg" },
    { label: "Hours", value: timeLeft.Hours, image: "/assets/couple-CzA0eK6B.jpg" },
    { label: "Minutes", value: timeLeft.Minutes, image: "/assets/couple-CzA0eK6B.jpg" },
    { label: "Seconds", value: timeLeft.Seconds, image: "/assets/couple-CzA0eK6B.jpg" }
  ];

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fcff_0%,#ffffff_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-borderSoft/60 bg-white shadow-[0_20px_80px_rgba(31,52,64,0.12)]"
        >
          <div className="relative h-[420px] sm:h-[500px] lg:h-[620px]">
            {/* Background Grayscale Image */}
            <img
              src="/assets/couple-CzA0eK6B.jpg"
              alt="Wedding countdown"
              className="h-full w-full object-cover grayscale"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_38%)]" />

            {/* Header Text Overlay */}
            <div className="absolute inset-x-0 top-10 z-10 px-6 text-center sm:top-12 lg:top-16">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="font-luxury text-[10px] font-semibold uppercase tracking-[0.35em] text-white/85 sm:text-xs"
              >
                #{couple.names.replace(/\s*&\s*/g, "").replace(/\s+/g, "").toLowerCase()}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="mt-4 font-heading text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl"
              >
                {getCountdownStatusText(timeLeft.Days)}
              </motion.h2>
            </div>

            {/* Countdown Grid Overlay */}
            <div className="absolute inset-x-0 bottom-20 z-10 px-4 sm:px-6 lg:px-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {countdownItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative aspect-[0.88/1] sm:aspect-[0.8/1]">
                      {/* Image Thumbnail inside card */}
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      {/* Gradients and Borders */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="absolute inset-0 ring-1 ring-white/20" />

                      {/* Label Bubble */}
                      <div className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white sm:text-[11px]">
                          {item.label}
                        </p>
                      </div>

                      {/* Large Countdown Value */}
                      <motion.p
                        initial={{ opacity: 0.4, scale: 0.92, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute bottom-3 right-3 font-heading text-5xl font-bold leading-none text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl"
                      >
                        {String(item.value).padStart(2, "0")}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Text Overlay inside block */}
            <div className="absolute inset-x-0 bottom-6 z-10 px-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="font-wedding text-4xl text-white sm:text-5xl"
              >
                {couple.names}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mt-1 font-luxury text-[10px] uppercase tracking-[0.35em] text-white/80 sm:text-xs"
              >
                {event.dateLabel}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Countdown;
