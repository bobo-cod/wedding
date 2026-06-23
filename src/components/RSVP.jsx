import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { X, SquareCheckBig, Download, Maximize2 } from "lucide-react";
import { config } from "../config";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { PrimaryButton, SecondaryButton } from "./Button";
import { Toast } from "./Toast";

// Modal Component
export function Modal({ open, onClose, children, title }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navyGray/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-primarySoft p-2 text-navyGray transition hover:bg-primary"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {title && (
          <h3 className="mb-6 pr-12 text-2xl font-semibold text-navyGray">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}

// QRCode Card Component
export function QRCodeCard({ value, guestCode }) {
  const qrRef = useRef(null);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const handleDownload = async () => {
    if (!qrRef.current) return;
    try {
      const dataUrl = await toPng(qrRef.current, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `${guestCode || "wedding-qr-code"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error downloading QR Code:", err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-sm rounded-[2rem] border border-borderSoft bg-white p-5 shadow-card">
        {/* Printable/Downloadable QR Code Area */}
        <div ref={qrRef} className="rounded-[1.5rem] bg-white p-5">
          <div className="mx-auto flex aspect-square max-w-[230px] items-center justify-center rounded-2xl border border-primary/40 bg-white p-4">
            <QRCode
              value={value}
              size={190}
              bgColor="#FFFFFF"
              fgColor="#1F3742"
              level="M"
            />
          </div>
          <p className="mt-4 text-center text-sm font-semibold tracking-wide text-navyGray">
            Guest Code: {guestCode}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <PrimaryButton onClick={handleDownload} className="px-4 py-3 text-xs">
            <span className="inline-flex items-center gap-2">
              <Download size={16} /> Download
            </span>
          </PrimaryButton>
          <SecondaryButton onClick={() => setFullscreenOpen(true)} className="px-4 py-3 text-xs">
            <span className="inline-flex items-center gap-2">
              <Maximize2 size={16} /> Fullscreen
            </span>
          </SecondaryButton>
        </div>

        <p className="mt-4 text-center text-xs leading-6 text-mutedText">
          Please keep this QR code safe. It may be required at the entrance.
        </p>
      </div>

      {/* Fullscreen QR Code Modal */}
      <Modal
        open={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
        title="Entrance QR Code"
      >
        <div className="mx-auto flex max-w-sm flex-col items-center rounded-[2rem] border border-borderSoft bg-white p-5">
          <QRCode
            value={value}
            size={280}
            bgColor="#FFFFFF"
            fgColor="#1F3742"
            level="M"
          />
          <p className="mt-5 text-sm font-semibold text-navyGray">
            Guest Code: {guestCode}
          </p>
        </div>
      </Modal>
    </>
  );
}

// RSVP Main Section
export function RSVP({ rsvpStatus, setRsvpStatus }) {
  const { event, guest } = config;
  const [localStatus, setLocalStatus] = useState("idle");
  const [isSaving, setIsSaving] = useState(false);

  const status = rsvpStatus || localStatus;
  const setStatus = setRsvpStatus || setLocalStatus;

  const handleRsvpAction = (newStatus) => {
    setIsSaving(true);
    setTimeout(() => {
      setStatus(newStatus);
      setIsSaving(false);
    }, 550);
  };

  return (
    <section id="rsvp" className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="RSVP & QR Code"
          subtitle="Confirm your attendance and keep your personal entrance QR code safe."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form Card */}
          <Card className="flex flex-col justify-between">
            <div>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primaryDark text-white shadow-glow">
                <SquareCheckBig size={30} />
              </div>
              <h3 className="text-center text-4xl font-semibold text-navyGray">
                RSVP
              </h3>
              <p className="mx-auto mt-5 max-w-md text-center leading-8 text-mutedText">
                Please confirm your attendance by clicking the{" "}
                <span className="font-semibold text-primaryDeep">confirm</span>{" "}
                button.
              </p>
              <p className="mt-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-goldDark">
                {event.deadline}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <PrimaryButton
                  disabled={isSaving}
                  onClick={() => handleRsvpAction("confirmed")}
                >
                  {isSaving ? "Saving..." : "Confirm Attendance"}
                </PrimaryButton>
                <SecondaryButton
                  disabled={isSaving}
                  onClick={() => handleRsvpAction("cancelled")}
                >
                  Cancel Attendance
                </SecondaryButton>
              </div>
            </div>

            <Toast
              type={status === "cancelled" ? "warning" : "success"}
              message={
                status === "confirmed"
                  ? "Your attendance is confirmed."
                  : status === "cancelled"
                  ? "Your attendance has been cancelled."
                  : ""
              }
              onClose={() => setStatus("idle")}
            />
          </Card>

          {/* QR Code Card */}
          <Card>
            <div className="text-center">
              <h3 className="text-4xl font-semibold text-navyGray">
                QR Code
              </h3>
              <p className="mx-auto mt-5 max-w-md leading-8 text-mutedText">
                This QR code grants you access to the event. Please present it at
                the entrance.
              </p>
            </div>
            <div className="mt-8">
              <QRCodeCard value={event.qrUrl} guestCode={guest.qrCodeId} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default RSVP;
