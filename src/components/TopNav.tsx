import { useState } from 'react'
import type { ReactNode } from 'react'
import { AirbnbLogo, BalloonIcon, BellIcon, GlobeIcon, GridIcon, HomeIcon, MenuIcon } from './icons'

const TABS = [
  { id: 'all', label: 'All', Icon: GridIcon },
  { id: 'homes', label: 'Homes', Icon: HomeIcon },
  { id: 'experiences', label: 'Experiences', Icon: BalloonIcon },
  { id: 'services', label: 'Services', Icon: BellIcon },
] as const

/**
 * Circular icon-only control — 40px, #f7f7f7 fill, hover lifts to #ebebeb.
 * Used for the globe and hamburger in the top-right utility cluster.
 */
function CircularNavButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid size-10 place-items-center rounded-buttons bg-faint text-hof transition-colors hover:bg-bebe"
    >
      {children}
    </button>
  )
}

export function TopNav() {
  const [activeTab, setActiveTab] = useState<string>('homes')

  return (
    <header className="sticky top-0 z-20 border-b border-bebe bg-white">
      <div className="mx-auto flex h-20 max-w-[var(--page-max-width)] items-center justify-between px-10">
        {/* Left: logo in Rausch — the only chromatic mark in the bar */}
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="Airbnb home">
          <AirbnbLogo />
          <span className="hidden text-ui font-semibold text-rausch lg:inline">airbnb</span>
        </a>

        {/* Center: pill tabs, active state marked by a 2px Hof underline */}
        <nav aria-label="Categories" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {TABS.map(({ id, label, Icon }) => {
              const isActive = id === activeTab
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setActiveTab(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex flex-col items-center gap-1 transition-colors ${
                      isActive ? 'text-hof' : 'text-foggy hover:text-hof'
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-micro">{label}</span>
                    <span
                      className={`h-0.5 w-full ${isActive ? 'bg-hof' : 'bg-transparent'}`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: utility cluster */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#"
            className="hidden rounded-buttons px-3 py-2 text-body font-medium text-hof transition-colors hover:bg-faint lg:block"
          >
            Become a host
          </a>
          <CircularNavButton label="Choose a language">
            <GlobeIcon size={16} />
          </CircularNavButton>
          <CircularNavButton label="Main menu">
            <MenuIcon size={16} />
          </CircularNavButton>
        </div>
      </div>
    </header>
  )
}
