import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const scrollRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-80 h-80 -top-20 -left-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -right-10 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:flex gap-16 relative z-10">
        
        {/* Contact Info */}
        <div className="lg:w-5/12 mb-16 lg:mb-0 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white">We're Here <br/><span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">For You</span></h1>
          
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-12 font-light">
            Whether you have a question about our collections, sizing, or a recent order, our concierge team is dedicated to assisting you with the utmost care.
          </p>

          <div className="space-y-8">
            {[
              { icon: Mail, title: "Email Client Services", detail: "concierge@silkura.com", sub: "We aim to respond within 24 hours." },
              { icon: Phone, title: "Phone", detail: "+1 (800) 123-4567", sub: "Mon-Fri, 9am - 6pm EST" },
              { icon: MapPin, title: "Flagship Studio", detail: "125 Silk Avenue, Suite 400\nNew York, NY 10012", sub: "" },
            ].map((item, idx) => (
              <div key={idx} className={`flex gap-4 animate-on-scroll stagger-${idx + 1} group`}>
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 whitespace-pre-line">{item.detail}</p>
                  {item.sub && <p className="text-xs text-slate-400 mt-1 italic">{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Instant Support */}
          <div className="mt-12 pt-8 border-t border-primary/15 animate-on-scroll stagger-4">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Instant Support</h4>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </div>
            </a>
            <p className="text-xs text-slate-400 mt-3 italic">Typically replies within minutes</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-7/12 animate-on-scroll stagger-2">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-3" />
            <h3 className="text-2xl font-serif mb-8 text-slate-900 dark:text-white relative z-10">Send us a Message</h3>
            
            {sent ? (
              <div className="text-center py-12 relative z-10">
                <div className="w-16 h-16 gradient-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 animate-scale-in">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Message Sent</h4>
                <p className="text-slate-400 font-light">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-8">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="First Name" required />
                  <InputField label="Last Name" required />
                </div>
                <InputField label="Email Address" type="email" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Topic</label>
                  <select className="px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <option>Order Inquiry</option>
                    <option>Sizing & Fit Advice</option>
                    <option>Returns & Exchanges</option>
                    <option>Press & Media</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Message</label>
                  <textarea 
                    className="px-4 py-3 rounded-xl border border-primary/20 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 min-h-[150px] resize-y backdrop-blur-sm"
                    required
                  ></textarea>
                </div>
                <Button type="submit" size="lg" fullWidth>Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
