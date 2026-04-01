interface LannaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-5xl md:text-6xl',
  xl: 'text-6xl md:text-8xl',
};

const LannaLogo = ({ className = '', size = 'lg' }: LannaLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Isotipo - forma geométrica abstracta que evoca flujo/movimiento */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className={`${size === 'sm' ? 'w-7 h-7' : size === 'md' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12 md:w-14 md:h-14' : 'w-14 h-14 md:w-18 md:h-18'}`}
      >
        {/* Dos flechas/flujos superpuestos - movimiento + dinero */}
        <path
          d="M8 36L24 8L32 24L16 24Z"
          fill="hsl(147, 63%, 29%)"
          opacity="0.9"
        />
        <path
          d="M20 40L36 12L40 24L28 36Z"
          fill="hsl(36, 68%, 50%)"
          opacity="0.85"
        />
      </svg>
      {/* Wordmark */}
      <span className={`font-heading tracking-wider ${sizes[size]} text-foreground`}>
        LA<span className="text-primary">NN</span>A
      </span>
    </div>
  );
};

export default LannaLogo;
