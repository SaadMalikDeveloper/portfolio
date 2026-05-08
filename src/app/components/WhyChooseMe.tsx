import { Clock, FileText, MessageSquare } from 'lucide-react';

export function WhyChooseMe() {
  const pillars = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Every milestone met. Every deadline honored. No surprises, no excuses.'
    },
    {
      icon: FileText,
      title: 'Clear Documentation',
      description: 'Comprehensive code documentation that empowers your team long after launch.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Daily updates, honest timelines, and proactive problem-solving throughout.'
    }
  ];

  return (
    <section className="py-24 bg-[#111827] relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="font-['Playfair_Display'] text-5xl lg:text-6xl text-white mb-4">
            Why Choose Me
          </h2>
          <p className="text-gray-400 text-lg">Excellence in execution, every single time</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#0A0F1E] to-[#080C18] border border-[#D4AF6A]/20 rounded-2xl p-8 h-full hover:border-[#D4AF6A]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,106,0.1)]">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#D4AF6A]/10 flex items-center justify-center group-hover:bg-[#D4AF6A]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#D4AF6A]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white font-['Playfair_Display'] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF6A]/5 rounded-full blur-3xl group-hover:bg-[#D4AF6A]/10 transition-colors"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
