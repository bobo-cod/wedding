import React, { useState } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Invitation from "./components/Invitation";
import RSVP from "./components/RSVP";
import GuestInfo from "./components/GuestInfo";
import Gift from "./components/Gift";
import Drinks from "./components/Drinks";
import Guestbook from "./components/Guestbook";
import Assistant from "./components/Assistant";
import Interactions from "./components/Interactions";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

export function App() {
  const [rsvpStatus, setRsvpStatus] = useState("");

  return (
    <main className="font-poppins text-textDark">
      <Hero />
      <Countdown />
      <Invitation />
      <RSVP rsvpStatus={rsvpStatus} setRsvpStatus={setRsvpStatus} />
      <GuestInfo rsvpStatus={rsvpStatus} />
      <Gift />
      <Drinks />
      <Guestbook />
      <Assistant />
      <Interactions />
      <Preview />
      <Footer />
    </main>
  );
}

export default App;
