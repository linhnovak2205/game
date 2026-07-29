import type { ReactNode } from 'react'
import { GlobeIcon } from './icons'

const COLUMNS = [
  {
    header: 'Support',
    links: [
      'Help Center',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
      'Report neighborhood concern',
    ],
  },
  {
    header: 'Hosting',
    links: [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
      'Join a free Hosting class',
    ],
  },
  {
    header: 'Airbnb',
    links: [
      'Newsroom',
      'New features',
      'Careers',
      'Investors',
      'Gift cards',
      'Airbnb.org emergency stays',
    ],
  },
]

/** Circular 32px social link — transparent, Hof stroke, inline row. */
function SocialLink({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid size-8 place-items-center rounded-buttons text-hof transition-colors hover:bg-bebe"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="mt-12 border-t border-bebe bg-faint">
      <div className="mx-auto max-w-[var(--page-max-width)] px-10 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {COLUMNS.map((column) => (
            <div key={column.header}>
              <h3 className="mb-3 text-body font-semibold text-hof">{column.header}</h3>
              <ul className="grid gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body text-foggy transition-colors hover:text-hof">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-bebe pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-body text-foggy">
            © {new Date().getFullYear()} Airbnb, Inc. · Terms · Sitemap · Privacy
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-body font-medium text-hof"
            >
              <GlobeIcon size={16} />
              English (US)
            </button>
            <button type="button" className="text-body font-medium text-hof">
              ₫ VND
            </button>
            <div className="flex items-center gap-1">
              <SocialLink label="Facebook">
                <path d="M14.5 8.5h2M14.5 21v-8.5c0-2 .8-3 2.5-3M11 12.5h5.5" />
                <rect x="3" y="3" width="18" height="18" rx="4" />
              </SocialLink>
              <SocialLink label="X">
                <path d="m4 4 16 16M20 4 4 20" />
              </SocialLink>
              <SocialLink label="Instagram">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
