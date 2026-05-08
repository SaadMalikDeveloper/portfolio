import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-2 h-2 bg-[#D4AF6A] rounded-full"></div>
      </div>

      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-500"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 0.15 : 0,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-32 h-32 bg-[#D4AF6A] rounded-full blur-3xl"></div>
      </div>
    </>
  );
}
