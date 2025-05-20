// components/RootLayoutClient.js (Client Component)
"use client"; // 👈 Must be a client component because it uses hooks

import { createContext, useState } from "react";
import RegistrationForm from "@/components/events/registration form";

// Create Context
export const AppContext = createContext();

export default function RootLayoutClient({ children }) {
  const [registrationDetails, setRegistrationDetails] = useState({
    eventImage: null,
    eventName: "",
    eventDescription: "",
    eventFee: "",
    defaultDate: "",
    allowedDates: null,
    availableDates: [],
  });

  return (
    <>
      <AppContext.Provider
        value={{ registrationDetails, setRegistrationDetails }}
      >
        {children}
        {registrationDetails.eventName && (
          <RegistrationForm
            setRegistrationDetails={setRegistrationDetails}
            registrationDetails={registrationDetails}
          />
        )}
      </AppContext.Provider>
    </>
  );
}
