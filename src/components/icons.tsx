import type { SVGProps } from 'react'

/**
 * Outlined, monochrome icon set. Per DESIGN.md the interface uses stroked
 * icons at ~16–20px with #222222 strokes — colour comes from `currentColor`
 * so callers control it with a text utility.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Icon({ size = 16, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Icon>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" />
    </Icon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m14.5 5-7 7 7 7" />
    </Icon>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m9.5 5 7 7-7 7" />
    </Icon>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  )
}

/** Heart for the wishlist toggle — `active` swaps the stroke for a Rausch fill. */
export function HeartIcon({ active = false, size = 20, ...props }: IconProps & { active?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={active ? '#ff385c' : 'rgba(0,0,0,0.35)'}
      stroke={active ? '#ff385c' : '#ffffff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 20.5 4.3 13a4.8 4.8 0 0 1 0-6.9a4.9 4.9 0 0 1 6.9 0l.8.8l.8-.8a4.9 4.9 0 0 1 6.9 0a4.8 4.8 0 0 1 0 6.9Z" />
    </svg>
  )
}

/** Filled star used beside the numeric rating on listing cards. */
export function StarIcon({ size = 12, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1Z" />
    </svg>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9.5V20h12V9.5" />
    </Icon>
  )
}

export function BalloonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3a6 6 0 0 1 6 6c0 3.6-3.4 6.6-6 8-2.6-1.4-6-4.4-6-8a6 6 0 0 1 6-6Z" />
      <path d="M10.5 17h3l-.6 4h-1.8Z" />
    </Icon>
  )
}

export function BellIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Icon>
  )
}

export function GridIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </Icon>
  )
}

/** The one multicolour graphic in the system: the Rausch wordmark. */
export function AirbnbLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="#ff385c"
      className={className}
      role="img"
      aria-label="Home"
    >
      <path d="M16 1.7c-1.9 0-3.4 1-4.5 3.1c-.6 1.2-1.5 3-2.7 5.5c-1.6 3.3-2.8 5.9-3.5 7.8c-.6 1.6-1 2.9-1 4c0 3.5 2.6 6.2 6 6.2c2.2 0 4.3-1.1 5.7-2.7c1.4 1.6 3.5 2.7 5.7 2.7c3.4 0 6-2.7 6-6.2c0-1.1-.4-2.4-1-4c-.7-1.9-1.9-4.5-3.5-7.8c-1.2-2.5-2.1-4.3-2.7-5.5C19.4 2.7 17.9 1.7 16 1.7Zm0 2.4c1 0 1.8.6 2.5 2c.6 1.2 1.5 2.9 2.6 5.4c1.6 3.2 2.7 5.8 3.4 7.5c.5 1.4.8 2.4.8 3.1c0 2.2-1.6 3.8-3.6 3.8c-1.8 0-3.6-1.1-4.7-2.9c1.6-2.1 2.7-4.1 2.7-6c0-2.3-1.6-3.9-3.7-3.9s-3.7 1.6-3.7 3.9c0 1.9 1.1 3.9 2.7 6c-1.1 1.8-2.9 2.9-4.7 2.9c-2 0-3.6-1.6-3.6-3.8c0-.7.3-1.7.8-3.1c.7-1.7 1.8-4.3 3.4-7.5c1.1-2.5 2-4.2 2.6-5.4c.7-1.4 1.5-2 2.5-2Zm0 11.6c.9 0 1.4.6 1.4 1.6c0 1.2-.7 2.6-1.4 3.7c-.7-1.1-1.4-2.5-1.4-3.7c0-1 .5-1.6 1.4-1.6Z" />
    </svg>
  )
}
