import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import hafizSaadMalik from './figma/hafizSaadMalik.jpeg';



export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080C18]">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <h1 className="font-['Playfair_Display'] text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] tracking-tight">
                Hafiz Saad<br />
                <span className="text-[#D4AF6A]">Malik</span>
              </h1>

              <p className="font-['Playfair_Display'] text-3xl lg:text-4xl text-gray-300 leading-tight">
                10 Years.<br />
                Thousands of Lines.<br />
                Countless Stores Built.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF6A]/30 bg-[#D4AF6A]/5">
              <span className="text-[#D4AF6A] text-sm font-medium">eCommerce Developer</span>
              <span className="text-[#D4AF6A]/50">·</span>
              <span className="text-gray-400 text-sm">Shopify</span>
              <span className="text-[#D4AF6A]/50">·</span>
              <span className="text-gray-400 text-sm">WordPress</span>
              <span className="text-[#D4AF6A]/50">·</span>
              <span className="text-gray-400 text-sm">BigCommerce</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#D4AF6A] text-[#080C18] rounded-lg hover:bg-[#C9A84C] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,106,0.3)] group flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://www.upwork.com/freelancers/hafizsaadm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#D4AF6A] text-[#D4AF6A] rounded-lg hover:bg-[#D4AF6A]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,106,0.2)]"
              >
                Hire Me on Upwork
              </a>
            </div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            className="relative lg:justify-self-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-[#D4AF6A]/20 blur-[100px] rounded-full"></div>

              {/* Photo container with gradient overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF6A]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E]/60 via-transparent to-[#080C18]/80 z-10"></div>
                <ImageWithFallback
                  src={hafizSaadMalik}
                  alt="Hafiz Saad Malik - eCommerce Developer"
                  className="w-full h-[500px] lg:h-[600px] object-cover grayscale-[0.3] contrast-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#D4AF6A]/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#D4AF6A] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
