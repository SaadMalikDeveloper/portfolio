import { ArrowUpRight } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import cannariver from './figma/cannariver.png';
import halcyon from './figma/halcyon.png';
import skinnyJane from './figma/skinnyJane.png';
import indocafe from './figma/indocafe.png';
import TokyoInternational from './figma/Tokyo-International.png';
import homeHebertHomes from './figma/homeHebertHomes.png';

import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      name: 'SkinnyJane',
      platform: 'BigCommerce',
      image: skinnyJane,
      description: 'Premium wellness brand store with custom checkout flow'
    },
    {
      name: 'Halcyon',
      platform: 'WordPress',
      image: halcyon,
      description: 'Enterprise WooCommerce solution with advanced inventory'
    },
    {
      name: 'Canna River',
      platform: 'BigCommerce',
      image: cannariver,
      description: 'CBD marketplace with custom product configurator'
    },
    {
      name: 'Tokyo International JP',
      platform: 'WordPress',
      image: TokyoInternational,
      description: 'Multi-currency international eCommerce platform'
    },
    {
      name: 'Indocafe',
      platform: 'Shopify',
      image: indocafe,
      description: 'Global coffee brand with custom subscription model'
    },
    {
      name: 'Home Hebert Homes',
      platform: 'WordPress',
      image: homeHebertHomes,
      description: 'Custom real estate listing platform'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0A0F1E] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-['Playfair_Display'] text-5xl lg:text-6xl text-white mb-4">
            Selected Works
          </h2>

          <p className="text-gray-400 text-lg">
            Projects that drive millions in revenue
          </p>
        </div>

        {/* Responsive Masonry */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            768: 2,
            1024: 3
          }}
        >
          <Masonry gutter="24px">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-[#080C18] rounded-2xl overflow-hidden border border-[#D4AF6A]/20 hover:border-[#D4AF6A]/50 transition-all duration-500 mb-6"
                style={{
                  transform:
                    index % 2 === 0
                      ? 'rotate(-1deg)'
                      : 'rotate(1deg)'
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C18] via-[#080C18]/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl text-white font-['Playfair_Display'] mb-2">
                        {project.name}
                      </h3>

                      <span className="inline-block px-3 py-1 bg-[#D4AF6A]/10 text-[#D4AF6A] text-sm rounded-full border border-[#D4AF6A]/30">
                        {project.platform}
                      </span>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF6A]/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-[#D4AF6A]" />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-[#D4AF6A] opacity-0 group-hover:opacity-20 rounded-2xl pointer-events-none transition-opacity"></div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}