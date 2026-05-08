import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#080C18] z-[100] flex items-center justify-center">
      <div className="relative">
        {/* Monogram with animation */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#D4AF6A] to-[#C9A84C] flex items-center justify-center animate-pulse">
          <span className="font-['Playfair_Display'] text-[#080C18] text-4xl">
            HSM
          </span>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#D4AF6A]/30 blur-3xl rounded-full animate-pulse"></div>

        {/* Loading text */}
        <p className="text-gray-400 text-sm text-center mt-8 tracking-wider">
          LOADING PORTFOLIO
        </p>
      </div>
    </div>
  );
}
