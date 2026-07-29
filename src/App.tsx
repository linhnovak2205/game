import { Footer } from './components/Footer'
import { ListingRow } from './components/ListingRow'
import { SearchBar } from './components/SearchBar'
import { TopNav } from './components/TopNav'
import { SECTIONS } from './data/listings'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <TopNav />

      <main>
        {/* The search capsule is the hero — no headline, no hero image */}
        <div className="bg-white pb-10 pt-8">
          <div className="mx-auto max-w-[var(--page-max-width)] px-10">
            <SearchBar />
          </div>
        </div>

        <div className="mx-auto max-w-[var(--page-max-width)] px-10 py-10">
          {/* Sections stack vertically with a 48px gap */}
          <div className="grid gap-[var(--section-gap)]">
            {SECTIONS.map((section) => (
              <ListingRow key={section.id} section={section} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
