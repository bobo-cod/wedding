import React from "react";
import { Ticket, MailOpen, QrCode, CalendarDays } from "lucide-react";
import { config } from "../config";
import { SectionHeader } from "./SectionHeader";

export function Preview() {
  const { couple, event } = config;

  const features = [
    { label: "Invitation Card", icon: Ticket, text: couple.names },
    { label: "Envelope Mockup", icon: MailOpen, text: "Soft blue ribbon style" },
    { label: "QR Preview", icon: QrCode, text: "Guest entrance access" },
    { label: "Event Card", icon: CalendarDays, text: event.dateLabel }
  ];

  return (
    <section
      id="preview"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primarySoft/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Invitation Preview"
          subtitle="A clean digital experience inspired by soft blue envelopes, satin ribbon, white cards, and champagne-gold details."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Main Visual Reference Card */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-borderSoft bg-primarySoft shadow-soft">
            <img
              src="/assets/blue-envelope-reference-CaSs0yJD.png"
              alt="Blue invitation color reference"
              className="absolute inset-0 h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primarySoft/95 via-white/30 to-transparent" />
            
            <div className="relative flex h-full min-h-[360px] max-w-md flex-col justify-end p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primaryDeep">
                Reference Style
              </p>
              <h3 className="mt-3 text-4xl font-semibold text-navyGray">
                Blue envelope luxury
              </h3>
              <p className="mt-4 text-sm leading-7 text-mutedText">
                This section shows the exact color direction: powder blue,
                ribbon blue, white, and subtle champagne gold.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(({ label, icon: Icon, text }) => (
              <div
                key={label}
                className="rounded-[1.6rem] border border-borderSoft bg-ivory p-6 shadow-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primarySoft text-primaryDeep ring-1 ring-primary/40">
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-navyGray">{label}</h4>
                <p className="mt-2 text-sm leading-6 text-mutedText">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Preview;
