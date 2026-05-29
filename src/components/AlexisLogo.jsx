export default function AlexisLogo({ size = 36, bgColor = '#000000', className = '' }) {
  const h = size * 0.85
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 48 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Alexis logo mark"
    >
      {/* Outer A shape */}
      <path
        d="M24 0 L48 41 H39 L34 31 H14 L9 41 H0 L24 0Z"
        fill="#C41414"
      />
      {/* Inner cutout — match the section background so it appears hollow */}
      <path
        d="M24 10 L36 32 H12 Z"
        fill={bgColor}
      />
    </svg>
  )
}

/* Large decorative version used in FAQ section */
export function AlexisLogoLarge({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 0 L200 175 H163 L141 130 H59 L37 175 H0 L100 0Z"
        fill="#C41414"
      />
      <path
        d="M100 42 L150 132 H50 Z"
        fill="#000000"
      />
    </svg>
  )
}
