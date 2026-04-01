interface LannaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
  xl: "h-24",
};

const LannaLogo = ({ className = "", size = "md" }: LannaLogoProps) => {
  return (
    <div className={`${sizes[size]} ${className} flex items-center`}>
      <svg viewBox="0 0 320 60" className="h-full w-auto" fill="currentColor">
        {/* L */}
        <path d="M0 4h14v42h28v14H0V4z" />
        {/* A */}
        <path d="M52 4h16l24 56h-15l-4.5-12H67.5L63 60H48L52 4zM70 38l-5-16h-.5L60 38H70z" />
        {/* N — first N with connecting bar to second N */}
        <path d="M98 4h13l18 34h.5V4H143v56h-13l-18-34h-.5V60H98V4z" />
        {/* N — second N, slightly overlapping */}
        <path d="M150 4h13l18 34h.5V4h13.5v56h-13l-18-34h-.5V60H150V4z" />
        {/* A */}
        <path d="M208 4h16l24 56h-15l-4.5-12h-25L199 60h-15l24-56zM226 38l-5-16h-.5L216 38h10z" />
        {/* Road/arrow element */}
        <rect x="260" y="25" width="55" height="10" rx="2" opacity="0.6" />
        <path d="M305 18l15 12-15 12V18z" opacity="0.8" />
      </svg>
    </div>
  );
};

export default LannaLogo;
