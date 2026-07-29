import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { ListingSection } from '../data/listings'
import { ListingCard } from './ListingCard'
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from './icons'

/** Circular 32px carousel control — white surface, subtle shadow, Hof chevron. */
function CarouselArrow({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-8 place-items-center rounded-buttons bg-white shadow-subtle transition-opacity disabled:cursor-default disabled:text-grey-500 disabled:opacity-50"
    >
      {children}
    </button>
  )
}

/**
 * One horizontal-scroll section: a 22px/500 title with a trailing arrow, plus
 * right-aligned carousel controls. Cards overflow horizontally in a 7-up grid.
 */
export function ListingRow({ section }: { section: ListingSection }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = () => {
    const node = scrollerRef.current
    if (!node) return
    setAtStart(node.scrollLeft <= 1)
    setAtEnd(node.scrollLeft + node.clientWidth >= node.scrollWidth - 1)
  }

  useEffect(() => {
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [])

  const scrollByPage = (direction: 1 | -1) => {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: direction * node.clientWidth, behavior: 'smooth' })
  }

  return (
    // min-w-0 stops the grid item's auto min-size from widening the scroller
    <section className="min-w-0" aria-labelledby={`${section.id}-title`}>
      <div className="mb-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-1 text-hof">
          <h2 id={`${section.id}-title`} className="text-heading-sm font-medium">
            {section.title}
          </h2>
          <ArrowRightIcon size={18} className="mt-0.5" />
        </a>
        <div className="flex items-center gap-2">
          <CarouselArrow label="Previous" disabled={atStart} onClick={() => scrollByPage(-1)}>
            <ChevronLeftIcon size={16} />
          </CarouselArrow>
          <CarouselArrow label="Next" disabled={atEnd} onClick={() => scrollByPage(1)}>
            <ChevronRightIcon size={16} />
          </CarouselArrow>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={syncEdges}
        className="no-scrollbar -mx-2 flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-2"
      >
        {section.listings.map((listing) => (
          <div
            key={listing.id}
            className="w-1/2 shrink-0 snap-start px-2 sm:w-1/3 lg:w-1/5 xl:w-[14.2857%]"
          >
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  )
}
