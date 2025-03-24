'use client'

import Events from "@/components/events"
import RegistrationForm from "@/components/events/registration form";
import { useState } from "react";

const ContactPage = () => {
  const [registrationDetails, setRegistrationDetails] = useState({ eventImage: null, eventName: '' });

  return (
    <>
      <Events setEvent={setRegistrationDetails} />
      {registrationDetails.eventName && (
        <RegistrationForm setEvent={setRegistrationDetails} image={registrationDetails.eventImage} event={registrationDetails.eventName} />
      )}
    </>
  );
}

export default ContactPage;
