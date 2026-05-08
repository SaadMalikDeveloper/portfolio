import { Mail, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleWhatsApp = () => {
    // Validation
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your name and contact number.');
      return;
    }

    const message = `Hello Hafiz,

My Name: ${name}
Contact Number: ${phone}

I would like to discuss a project with you.`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/923112915802?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <section className="py-32 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF6A]/10 via-transparent to-[#D4AF6A]/5"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF6A]/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="font-['Playfair_Display'] text-5xl lg:text-7xl text-white mb-6 leading-tight">
          Let's Build Something
          <br />
          <span className="text-[#D4AF6A]">That Sells</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Available for freelance projects & long-term collaborations
        </p>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name *"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-[#111827] border border-[#D4AF6A]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF6A] transition-all duration-300"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Your Contact Number *"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-5 py-4 rounded-xl bg-[#111827] border border-[#D4AF6A]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF6A] transition-all duration-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Upwork Button */}
          <a
            href="https://www.upwork.com/freelancers/hafizsaadm"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-[#D4AF6A] text-[#080C18] rounded-xl hover:bg-[#C9A84C] transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,106,0.4)] flex items-center gap-3 min-w-[240px] justify-center"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />

            <span className="text-lg font-medium">
              Hire Me on Upwork
            </span>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="px-10 py-5 border-2 border-[#D4AF6A] text-[#D4AF6A] rounded-xl hover:bg-[#D4AF6A]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,106,0.2)] flex items-center gap-3 min-w-[240px] justify-center"
          >
            <Mail className="w-5 h-5" />

            <span className="text-lg font-medium">
              Send on WhatsApp
            </span>
          </button>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF6A]"></div>

          <div className="w-2 h-2 bg-[#D4AF6A] rounded-full"></div>

          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF6A]"></div>
        </div>
      </div>
    </section>
  );
}