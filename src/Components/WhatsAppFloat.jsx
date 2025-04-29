import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "923106234055"; // Replace with your WhatsApp number (in international format, no '+' sign)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 md:p-3 shadow-lg z-50 transition"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={38} />
    </a>
  );
};

export default WhatsAppFloat;
