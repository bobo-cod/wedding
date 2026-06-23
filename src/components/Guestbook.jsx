import React, { useState } from "react";
import { BookOpen, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { PrimaryButton } from "./Button";
import { Toast } from "./Toast";

export function Guestbook() {
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setToast({ type: "error", message: "Message cannot be empty." });
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setToast({
        type: "success",
        message: "Your message has been sent successfully."
      });
      setMessage("");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="guestbook" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Card className="bg-white/85">
          <SectionHeader
            title="Guestbook"
            subtitle="Leave a message in the event’s guestbook. They’ll be delighted to read it. Thank you!"
          />

          {/* Book Icon */}
          <div className="mt-8 flex justify-center text-primaryDeep">
            <BookOpen size={40} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-4xl">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here…"
              rows={5}
              disabled={isSubmitting}
              className="w-full resize-y rounded-[1.5rem] border border-borderSoft bg-white/85 p-5 text-sm leading-7 text-navyGray outline-none transition focus:border-primaryDark focus:ring-4 focus:ring-primary/30 disabled:opacity-60"
            />

            <div className="mt-6 flex justify-center">
              <PrimaryButton type="submit" disabled={isSubmitting}>
                <span className="inline-flex items-center gap-2">
                  <Send size={16} /> {isSubmitting ? "Sending..." : "Send"}
                </span>
              </PrimaryButton>
            </div>

            {/* Response Toast */}
            <Toast
              type={toast.type}
              message={toast.message}
              onClose={() => setToast({ type: "", message: "" })}
            />
          </form>
        </Card>
      </div>
    </section>
  );
}
export default Guestbook;
