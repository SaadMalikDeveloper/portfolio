export function StatsBar() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '4', label: 'Platforms Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="bg-[#0A0F1E] border-y border-[#D4AF6A]/20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF6A]/5 via-transparent to-[#D4AF6A]/5"></div>

      <div className="max-w-7xl mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#D4AF6A]/30"></div>
              )}
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-['Playfair_Display'] text-[#D4AF6A]">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
