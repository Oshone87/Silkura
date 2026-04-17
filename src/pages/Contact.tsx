import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WHATSAPP_NUMBER = '2348148469497';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Silkura! 💗 I'd love to learn more about your Silk Spell collection.');

export default function Contact() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-80 h-80 -top-20 -left-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -right-10 opacity-10" />

      <div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white">We're Here <br/><span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">For You</span></h1>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-xl mx-auto">
            Whether you have a question about our collections, sizing, or a recent order, our concierge team is dedicated to assisting you with the utmost care.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Mail, title: "Email Us", detail: "concierge@silkura.com", sub: "We respond within 24 hours" },
            { icon: Phone, title: "Call Us", detail: "+234 814 846 9497", sub: "Mon-Fri, 9am - 6pm WAT" },
          ].map((item, idx) => (
            <div key={idx} className={`glass-card p-6 text-center animate-on-scroll stagger-${idx + 1} group hover:scale-105 transition-all duration-300`}>
              <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-md shadow-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-pre-line">{item.detail}</p>
              {item.sub && <p className="text-xs text-slate-400 mt-2 italic">{item.sub}</p>}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA - Main Highlight */}
        <div className="animate-on-scroll stagger-4">
          <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-5" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30 animate-float">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif mb-3 text-slate-900 dark:text-white">Chat With Us Instantly</h2>
              <p className="text-slate-500 dark:text-slate-400 font-light mb-8 max-w-md mx-auto">
                Skip the wait — reach us directly on WhatsApp for instant replies, order updates, and personalized styling advice.
              </p>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/35 text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
              
              <p className="text-xs text-slate-400 mt-5 italic">💬 Typically replies within minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
