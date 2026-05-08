import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080C18] border-t border-[#D4AF6A]/20 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo monogram */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF6A] to-[#C9A84C] flex items-center justify-center">
              <span className="font-['Playfair_Display'] text-[#080C18] text-xl">
                HSM
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              <div className="text-white">Hafiz Saad Malik</div>
              <div>eCommerce Developer</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </div>

          {/* Social link */}
          <a
            href="https://www.upwork.com/freelancers/hafizsaadm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D4AF6A] hover:text-[#C9A84C] transition-colors group"
          >
            <span className="text-sm">Upwork Profile</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
