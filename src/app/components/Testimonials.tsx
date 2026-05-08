import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Kevin Warraich',
      role: 'CEO, SkinnyJane',
      text: 'Hafiz delivered our BigCommerce store ahead of schedule with zero bugs. His attention to detail and proactive communication made the entire process seamless. The custom checkout flow he built increased our conversion rate by 23%.',
      rating: 5
    },
    {
      name: 'Kevin Warraich',
      role: 'Founder, Halcyon Wellness',
      text: 'Working with Hafiz on our WordPress platform was transformative. He didn\'t just code—he consulted on UX, performance, and scalability. The result? A store that handles 10,000+ daily visitors without breaking a sweat.',
      rating: 5
    },
    {
      name: 'Nael',
      role: 'Product Manager, Canna River',
      text: 'Best developer we\'ve ever hired. Hafiz understood our complex product configurator requirements immediately and delivered a solution that our competitors still can\'t replicate. Highly recommended for enterprise-level work.',
      rating: 5
    },
    {
      name: 'Ray G.',
      role: 'Director, Tokyo International',
      text: 'Hafiz built our multi-currency WooCommerce platform with flawless execution. His code is clean, documented, and maintainable. He\'s the rare developer who thinks like a business owner—always asking the right questions.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#080C18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="font-['Playfair_Display'] text-5xl lg:text-6xl text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">Real results from real partnerships</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] md:w-[500px] snap-center"
            >
              <div className="relative bg-gradient-to-br from-[#0A0F1E] to-[#080C18] border border-[#D4AF6A]/20 rounded-2xl p-8 h-full hover:border-[#D4AF6A]/40 transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-16 h-16 text-[#D4AF6A]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF6A] text-[#D4AF6A]" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-[#D4AF6A]/20 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF6A]/20 flex items-center justify-center">
                    <span className="text-[#D4AF6A] font-['Playfair_Display'] text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-[#D4AF6A]">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">← Scroll to see more →</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
