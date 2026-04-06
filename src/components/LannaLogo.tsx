const LannaLogo = ({ className = '', size = 'default' }: { className?: string; size?: 'small' | 'default' | 'large' }) => {
  const sizes = {
    small: { width: 120, height: 32 },
    default: { width: 200, height: 52 },
    large: { width: 320, height: 84 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      viewBox="0 0 320 84"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LANNA"
    >
      {/* Isotipo — dos flechas abstractas representando flujo/movimiento */}
      <g>
        <path
          d="M12 42L28 26L28 38L44 22L44 34L28 50L28 38L12 54Z"
          fill="hsl(145, 63%, 29%)"
          opacity="0.9"
        />
        <path
          d="M20 42L36 26L36 38L52 22L52 34L36 50L36 38L20 54Z"
          fill="hsl(36, 69%, 50%)"
          opacity="0.7"
        />
      </g>

      {/* Wordmark LANNA */}
      <g fill="currentColor">
        {/* L */}
        <path d="M68 20H78V56H98V64H68V20Z" />
        {/* A */}
        <path d="M104 64L120 20H132L148 64H138L134.5 54H117.5L114 64H104ZM120.5 46H131.5L126 30L120.5 46Z" />
        {/* N — primera N, con barra diagonal más gruesa */}
        <path d="M154 20H164L184 50V20H194V64H184L164 34V64H154V20Z" />
        {/* N — segunda N, conectada sutilmente a la primera */}
        <path d="M200 20H210L230 50V20H240V64H230L210 34V64H200V20Z" />
        {/* A */}
        <path d="M248 64L264 20H276L292 64H282L278.5 54H261.5L258 64H248ZM264.5 46H275.5L270 30L264.5 46Z" />
      </g>

      {/* Línea sutil que conecta las dos N */}
      <rect x="194" y="60" width="6" height="4" rx="1" fill="hsl(145, 63%, 29%)" />
    </svg>
  );
};

export default LannaLogo;
