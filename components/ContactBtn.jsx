
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const ContactButton = () => {
  const phoneNumber = "919342991455";
  const whatsappMessage = "Hi! I'd like to inquire about your services.";

  const actions = [
    {
      id: 'whatsapp',
      icon: <Phone size={24} fill="currentColor" />,
      color: 'bg-green-500',
      label: 'WhatsApp',
      onClick: () => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank'),
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3">
      {actions.map((action, index) => (
        <div key={action.id} className="relative flex items-center justify-center group">
          {/* Label on Hover */}
          <span className="absolute px-3 py-1 text-xs font-bold transition-opacity bg-white border rounded-lg shadow-lg opacity-0 pointer-events-none right-16 text-slate-800 group-hover:opacity-100 whitespace-nowrap border-slate-100">
            {action.label}
          </span>
          
          {/* Pulse Effect only for the bottom button (index 1) to grab attention */}
          {index === 1 && (
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute w-14 h-14 rounded-full -z-10`}
            />
          )}

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={action.onClick}
            className={` text-white w-14 h-14 flex items-center justify-center rounded-full  `}
          >
            <img src="/WhatsApp_icon.png" className='object-cover' alt="" />
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default ContactButton;