import React, { useState } from "react";
import { motion } from "framer-motion";

export function Gift() {
  const [selectedGift, setSelectedGift] = useState("Envelope");

  const giftOptions = [
    {
      label: "Envelope",
      title: "Envelope Gift",
      description: "A simple and elegant way to share your blessing.",
      image: "/assets/blue-envelope-reference-CaSs0yJD.png"
    },
    {
      label: "Present",
      title: "Physical Present",
      description: "Bring a thoughtful gift to celebrate this special day.",
      image: "/assets/present-gift-CSBQJJkB.jpg"
    }
  ];

  return (
    <section
      id="gift"
      className="relative overflow-hidden bg-ivory py-16 sm:py-20"
    >
      {/* Background blur decorators */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primarySoft blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-borderSoft bg-white shadow-[0_25px_90px_rgba(31,52,64,0.12)]"
        >
          {/* Card background with flatlay overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/giftFlatlay-gift-BTB0xApo.jpg"
              alt="Wedding gift flatlay"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />
          </div>

          <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />

          {/* Card content */}
          <div className="relative grid min-h-[460px] items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.85fr_1fr] lg:px-14">
            {/* Sidebar illustrations (visible on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="relative mx-auto hidden w-full max-w-md lg:block"
            >
              {/* Back card: present box */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_25px_70px_rgba(31,52,64,0.18)]"
              >
                <img
                  src="/assets/present-gift-CSBQJJkB.jpg"
                  alt="Wedding present"
                  className="h-80 w-full rounded-[1.5rem] object-cover"
                />
              </motion.div>

              {/* Front card: envelope reference */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [4, 9, 4] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-8 w-48 overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-2 shadow-[0_18px_50px_rgba(31,52,64,0.16)]"
              >
                <img
                  src="/assets/blue-envelope-reference-CaSs0yJD.png"
                  alt="Wedding envelope gift"
                  className="h-36 w-full rounded-[1rem] object-cover"
                />
              </motion.div>

              <div className="absolute -bottom-6 left-8 rounded-full border border-gold/50 bg-white/85 px-6 py-3 text-sm font-semibold text-primaryDeep shadow-card backdrop-blur">
                Wedding Gift Choice
              </div>
            </motion.div>

            {/* Gift selection panel */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="mx-auto max-w-2xl text-center lg:text-left"
            >
              <p className="font-luxury text-xs font-semibold uppercase tracking-[0.35em] text-primaryDeep">
                Wedding Gift
              </p>
              <h2 className="mt-3 font-heading text-5xl font-semibold text-navyGray sm:text-6xl">
                Gift
              </h2>
              <div className="mx-auto my-5 flex items-center justify-center gap-3 lg:mx-0 lg:justify-start">
                <span className="h-px w-20 bg-gold" />
                <span className="h-2 w-2 rotate-45 bg-gold" />
                <span className="h-px w-20 bg-gold" />
              </div>
              <p className="text-base leading-7 text-mutedText sm:text-lg">
                Your presence at our wedding is a true treasure.
              </p>
              <p className="mt-4 text-sm font-medium text-navyGray">
                Choose your type of gift.
              </p>

              {/* Toggle Buttons */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {giftOptions.map((option) => {
                  const isSelected = selectedGift === option.label;
                  return (
                    <motion.button
                      key={option.label}
                      type="button"
                      onClick={() => setSelectedGift(option.label)}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`group relative overflow-hidden rounded-[1.7rem] border bg-white text-left shadow-card transition duration-300 ${
                        isSelected
                          ? "border-primaryDeep ring-4 ring-primary/20"
                          : "border-borderSoft hover:border-primaryDeep"
                      }`}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={option.image}
                          alt={option.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primaryDeep text-white shadow-card font-bold"
                          >
                            ✓
                          </motion.div>
                        )}
                        <div className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold text-primaryDeep backdrop-blur">
                          {option.label}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-xl font-semibold text-navyGray">
                          {option.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-mutedText">
                          {option.description}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Status info bar */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-7 rounded-3xl border border-borderSoft bg-primarySoft/85 px-6 py-4 text-center shadow-card lg:text-left"
                key={selectedGift}
              >
                <p className="text-sm text-mutedText">Selected gift option</p>
                <p className="font-heading text-2xl font-semibold text-primaryDeep">
                  {selectedGift === "Envelope" ? "Envelope Gift" : "Physical Present"}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Gift;
