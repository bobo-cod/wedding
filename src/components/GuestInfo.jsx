import React from "react";
import { Users, Ticket, Table2, Hash, BadgeCheck } from "lucide-react";
import { config } from "../config";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

const icons = [Users, Ticket, Table2, Hash, BadgeCheck];

export function GuestInfo({ rsvpStatus }) {
  const { guest } = config;
  const currentStatus = rsvpStatus || guest.status;

  const guestFields = [
    ["Guest Name", guest.name],
    ["Invitation Type", guest.invitationType],
    ["Table Number", guest.tableNumber],
    ["Seat Number", guest.seatNumber],
    ["QR Code ID", guest.qrCodeId]
  ];

  // Dynamic styling for the RSVP status block
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return {
          bg: "bg-successSoft",
          border: "border-successText/15",
          text: "text-successText"
        };
      case "cancelled":
        return {
          bg: "bg-red-50",
          border: "border-red-500/15",
          text: "text-red-700"
        };
      case "hold":
      case "pending":
      default:
        return {
          bg: "bg-warningSoft",
          border: "border-warningText/15",
          text: "text-warningText"
        };
    }
  };

  const statusStyle = getStatusStyles(currentStatus);

  return (
    <section id="guest" className="bg-primarySoft py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader
          title="Guest Information"
          subtitle="Your personal invitation details are prepared for the entrance team."
        />

        <Card className="mx-auto mt-12 max-w-3xl bg-white/85">
          <div className="grid gap-4 sm:grid-cols-2">
            {guestFields.map(([label, val], i) => {
              const Icon = icons[i];
              return (
                <div
                  key={label}
                  className="rounded-2xl border border-borderSoft bg-white p-4"
                >
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primaryDeep">
                    <Icon size={16} />
                    {label}
                  </p>
                  <p className="text-lg font-semibold text-navyGray">
                    {val}
                  </p>
                </div>
              );
            })}

            {/* Current Status Block */}
            <div className={`rounded-2xl border ${statusStyle.border} ${statusStyle.bg} p-4 sm:col-span-2`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${statusStyle.text}`}>
                Current Status
              </p>
              <p className={`mt-2 text-lg font-semibold uppercase tracking-wider ${statusStyle.text}`}>
                {currentStatus}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
export default GuestInfo;
