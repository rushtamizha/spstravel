'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';


export default function Drawer({ isOpen, onClose, navLinks, onNavClick, activeLink }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-large"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <span className="text-2xl font-bold text-dark-text">Wepzite</span>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-dark-text" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavClick(link.href);
                        onClose();
                      }}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeLink === link.name
                          ? 'bg-primary text-white shadow-soft'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <motion.a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 shadow-soft hover:shadow-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp Us</span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="btn-primary w-full text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick('#contact');
                    onClose();
                  }}
                >
                  Get Free Quote
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}