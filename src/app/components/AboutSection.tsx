import { ShoppingCart, Code2, Palette, Database } from 'lucide-react';

export function AboutSection() {
  const skills = [
    { name: 'Shopify', icon: ShoppingCart },
    { name: 'WordPress', icon: Code2 },
    { name: 'BigCommerce', icon: ShoppingCart },
    { name: 'WooCommerce', icon: Database },
    { name: 'Webflow', icon: Palette }
  ];

  return (
    <section className="py-24 bg-[#080C18] relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="space-y-6">
            <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl text-white">
              Building Revenue-Generating Digital Experiences
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A decade of turning ambitious eCommerce ideas into thriving online stores. I don't just write code—I architect scalable, conversion-optimized platforms that drive business growth. From custom Shopify themes to enterprise BigCommerce solutions, I bring technical precision and strategic thinking to every project.
            </p>

            {/* Timeline */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF6A] to-transparent"></div>
                <div className="flex items-center gap-8">
                  <span className="text-[#D4AF6A] font-['Playfair_Display'] text-2xl">2014</span>
                  <div className="w-2 h-2 bg-[#D4AF6A] rounded-full animate-pulse"></div>
                  <span className="text-[#D4AF6A] font-['Playfair_Display'] text-2xl">2026</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-[#D4AF6A] to-transparent"></div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">A decade of excellence</p>
            </div>
          </div>

          {/* Right - Skills Grid */}
          <div>
            <h3 className="text-[#D4AF6A] text-sm uppercase tracking-wider mb-6">Platform Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#0A0F1E] to-[#080C18] border border-[#D4AF6A]/20 rounded-xl p-6 hover:border-[#D4AF6A]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,106,0.15)]"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-[#D4AF6A]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                      <div className="w-12 h-12 rounded-lg bg-[#D4AF6A]/10 flex items-center justify-center group-hover:bg-[#D4AF6A]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#D4AF6A]" />
                      </div>
                      <span className="text-white">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
