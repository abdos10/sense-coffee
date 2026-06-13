"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Name: ${name}%0aPhone: ${phone}%0aMessage: ${message}`
    );

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/20 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/60 transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/20 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/60 transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Write your message here..."
          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gold/20 text-brand-dark placeholder:text-brand-dark/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/60 transition-all text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-brand-dark text-white font-semibold text-sm hover:bg-brand-coffee transition-all duration-200 active:scale-[0.98]"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
