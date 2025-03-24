'use client'

import Events from "@/components/events"
import RegistrationForm from "@/components/events/registration form";
import { useState } from "react";

const ContactPage = () => {
  const [registrationDetails, setRegistrationDetails] = useState({ 
    eventImage: null, 
    eventName: '', 
    defaultDate: '',
    allowedDates: null,
  });

  return (
    <>
      <Events setEvent={setRegistrationDetails} />
      {registrationDetails.eventName && (
        <RegistrationForm setEvent={setRegistrationDetails} registrationDetails={registrationDetails} />
      )}
    </>
  );
}

export default ContactPage;
