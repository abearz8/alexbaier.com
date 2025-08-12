"use client";

import React from "react";

type ContactButton = {
  name: string;
  href: string;
  icon: string;
};

type Props = {
  contacts: ContactButton[];
  className?: string;
};

const ContactMe: React.FC<Props> = ({
  contacts,
  className = "",
}) => {
  return (
    <section className={`relative w-full ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-white/10 bg-black/30 transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
              >
                <div className="w-16 h-16 grid place-items-center">
                  <img
                    src={contact.icon}
                    alt={`${contact.name} icon`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-white font-inter text-center text-sm sm:text-base font-medium">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
