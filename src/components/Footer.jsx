import React from "react";
import { CalendarDays, Clock } from "lucide-react";
import { config } from "../config";

export function Footer() {
  const { couple, event } = config;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-primaryDark via-ribbonDark to-primaryDeep text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 text-center md:grid-cols-3 md:text-left lg:px-8">
        {/* Left: Date */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <CalendarDays size={20} />
          <span className="font-medium">{event.dateLabel}</span>
        </div>

        {/* Center: Names */}
        <div className="text-center">
          <p className="text-3xl font-semibold tracking-tight">{couple.names}</p>
          <div className="mx-auto mt-3 h-px w-28 bg-white/50" />
        </div>

        {/* Right: Time */}
        <div className="flex items-center justify-center gap-3 md:justify-end">
          <Clock size={20} />
          <span className="font-medium">At {event.timeLabel}</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/20 px-6 py-4 text-center text-sm text-white/85">
        © 2027 Invitation By Emery & Nelly, All Rights Reserved.
      </div>
    </footer>
  );
}
export default Footer;
