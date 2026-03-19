import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:flex gap-16">
      
      {/* Contact Info */}
      <div className="lg:w-5/12 mb-16 lg:mb-0">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white">We're Here <br/><span className="italic">For You</span></h1>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          Whether you have a question about our collections, sizing, or a recent order, our concierge team is dedicated to assisting you with the utmost care.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-accent-gold">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Client Services</h4>
              <p className="text-sm text-slate-500">concierge@silkura.com</p>
              <p className="text-xs text-slate-400 mt-1">We aim to respond within 24 hours.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-accent-gold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
              <p className="text-sm text-slate-500">+1 (800) 123-4567</p>
              <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-accent-gold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Flagship Studio</h4>
              <p className="text-sm text-slate-500">125 Silk Avenue, Suite 400<br/>New York, NY 10012</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Instant Support */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Instant Support</h4>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="inline-block">
            <div className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md shadow-green-500/20">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </div>
          </a>
          <p className="text-xs text-slate-400 mt-3 italic">Typically replies within minutes</p>
        </div>
      </div>

      {/* Form */}
      <div className="lg:w-7/12">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-serif mb-8 text-slate-900 dark:text-white">Send us a Message</h3>
          
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Message Sent</h4>
              <p className="text-slate-500">Thank you for reaching out. Our team will get back to you shortly.</p>
              <Button onClick={() => setSent(false)} variant="outline" className="mt-8">Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="First Name" required />
                <InputField label="Last Name" required />
              </div>
              <InputField label="Email Address" type="email" required />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Topic</label>
                <select className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-gold transition-colors">
                  <option>Order Inquiry</option>
                  <option>Sizing & Fit Advice</option>
                  <option>Returns & Exchanges</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-gold transition-colors min-h-[150px] resize-y"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" fullWidth>Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
