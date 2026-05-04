export function IconMapPin({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  )
}

export function IconClock({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l3 2" />
    </svg>
  )
}

export function IconPhone({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M6.5 3h3l2 5-2.2 1.2a12 12 0 0 0 5.5 5.5L16 12l5 2v3a1.5 1.5 0 0 1-1.4 1.5 19 19 0 0 1-8.6-3.5A19 19 0 0 1 5 4.9 1.5 1.5 0 0 1 6.5 3Z" />
    </svg>
  )
}

export function IconMail({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconInstagram({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export function IconFacebook({ className = 'h-6 w-6', ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M13.5 22v-8.2h2.7l.5-3.3h-3.2V8.5c0-.9.3-1.5 1.6-1.5H17V4.1A22 22 0 0 0 14.6 4c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.9v3.3h2.5V22h3.1Z" />
    </svg>
  )
}
