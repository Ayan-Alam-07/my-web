const GemIcon = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 2L2 9L6 22L12 19L18 22L22 9L12 2Z"
      fill="url(#gemGrad)"
      stroke="url(#gemStroke)"
      strokeWidth="1.5"
    />
    <path d="M12 2L8 9H16L12 2Z" fill="url(#gemTop)" opacity="0.6" />
    <path d="M8 9L6 22L12 19L8 9Z" fill="url(#gemLeft)" opacity="0.4" />
    <path d="M16 9L18 22L12 19L16 9Z" fill="url(#gemRight)" opacity="0.3" />
    <path d="M2 9L8 9L12 19L6 22L2 9Z" fill="url(#gemLeftFace)" opacity="0.5" />
    <path
      d="M22 9L16 9L12 19L18 22L22 9Z"
      fill="url(#gemRightFace)"
      opacity="0.4"
    />
    <defs>
      <linearGradient id="gemGrad" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="gemStroke" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#6d28d9" />
      </linearGradient>
      <linearGradient id="gemTop" x1="8" y1="2" x2="16" y2="9">
        <stop offset="0%" stopColor="#e0d4ff" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="gemLeft" x1="6" y1="9" x2="12" y2="19">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#5b21b6" />
      </linearGradient>
      <linearGradient id="gemRight" x1="16" y1="9" x2="18" y2="22">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
      <linearGradient id="gemLeftFace" x1="2" y1="9" x2="8" y2="19">
        <stop offset="0%" stopColor="#6d28d9" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="gemRightFace" x1="22" y1="9" x2="16" y2="19">
        <stop offset="0%" stopColor="#5b21b6" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
    </defs>
  </svg>
);
export default GemIcon;
