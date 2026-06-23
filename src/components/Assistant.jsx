import React from "react";
import { MessageCircle } from "lucide-react";
import { config } from "../config";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { PrimaryButton } from "./Button";

export function Assistant() {
  const { event } = config;

  return (
    <section id="assistant" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="WhatsApp Assistant"
            subtitle="I’m your personal WhatsApp assistant. I can help you get your invitation back if you lose it, and much more."
          />

          {/* WhatsApp Icon Area */}
          <div className="mt-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
              <MessageCircle size={38} />
            </div>
          </div>

          {/* WhatsApp Link Button */}
          <a
            href={event.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex"
          >
            <PrimaryButton>Access Here</PrimaryButton>
          </a>
        </Card>
      </div>
    </section>
  );
}
export default Assistant;
