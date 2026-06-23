import React from "react";
import { Landmark, Music, CalendarDays, Clock, MapPin } from "lucide-react";
import { config } from "../config";
import { Ornament } from "./Ornament";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

export function Invitation() {
  const { couple, guest, invitationMessage, schedule } = config;

  return (
    <section
      id="invitation"
      className="relative overflow-hidden bg-ivory py-24 sm:py-28"
    >
      {/* Decorative Ornaments */}
      <Ornament className="top-32 opacity-25" />
      <Ornament position="right" className="top-36 opacity-25" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          title="Invitation"
          subtitle={`Dear ${guest.name}, you are warmly invited to celebrate with us.`}
        />

        <Card className="mx-auto mt-12 max-w-5xl bg-white/80 text-center">
          {/* Guest Name */}
          <p className="text-lg font-semibold text-primaryDeep">{guest.name}</p>
          <div className="mx-auto my-5 h-px w-28 bg-gold" />

          {/* Invitation Text */}
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-mutedText">
            <p>
              With immense joy and filled with love,{" "}
              <span className="font-semibold text-navyGray">{couple.names}</span>{" "}
              have the honor of inviting you to celebrate the most beautiful day
              of their lives.
            </p>
            <p>{invitationMessage[1]}</p>
          </div>

          {/* Schedule Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {schedule.map((item, index) => {
              const Icon = index === 0 ? Landmark : Music;
              return (
                <div
                  key={item.id}
                  className="rounded-[1.8rem] border border-borderSoft bg-white/90 p-6 text-left shadow-card"
                >
                  {/* Event Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primarySoft text-primaryDeep ring-1 ring-primary/40">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navyGray">
                    {item.title}
                  </h3>

                  {/* Event details */}
                  <div className="mt-5 space-y-3 text-sm text-mutedText">
                    <p className="flex items-start gap-3">
                      <CalendarDays size={18} className="mt-0.5 text-primaryDeep" />
                      <span>{item.date}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 text-primaryDeep" />
                      <span>{item.time}</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 text-primaryDeep" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-lg font-semibold text-primaryDeep">
            A warm welcome!
          </p>
        </Card>
      </div>
    </section>
  );
}
export default Invitation;
