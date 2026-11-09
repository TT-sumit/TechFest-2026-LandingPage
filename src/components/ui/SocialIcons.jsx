/**
 * Brand marks are inlined: the icon package no longer ships brand glyphs.
 * Each returns a 24x24 svg that inherits `currentColor`.
 */

const paths = {
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" fill="none" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.15" stroke="none" />
    </>
  ),
  x: (
    <path
      d="M18.9 3h3.1l-6.8 7.8L23 21h-6.2l-4.9-6.4L6.3 21H3.2l7.3-8.3L3 3h6.4l4.4 5.8L18.9 3zm-1.1 16.1h1.7L7.3 4.8H5.5l12.3 14.3z"
      stroke="none"
    />
  ),
  facebook: (
    <path
      d="M13.5 21v-7.5h2.6l.4-3h-3V8.7c0-.86.24-1.45 1.48-1.45H16.6V4.56A20 20 0 0 0 14.27 4.4c-2.31 0-3.89 1.4-3.89 3.99v2.11H7.7v3h2.68V21h3.12z"
      stroke="none"
    />
  ),
  linkedin: (
    <path
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3.2 9.2h3.56V21H3.2zM10 9.2h3.41v1.61h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43V21h-3.55v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H10z"
      stroke="none"
    />
  ),
  youtube: (
    <>
      <rect x="2.2" y="5.2" width="19.6" height="13.6" rx="4.2" fill="none" strokeWidth="1.7" />
      <path d="M10.4 9.4 15 12l-4.6 2.6z" stroke="none" />
    </>
  ),
}

export default function SocialIcon({ name, className = 'size-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
