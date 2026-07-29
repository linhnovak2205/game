import { useState } from 'react'
import type { Listing } from '../data/listings'
import { HeartIcon, StarIcon } from './icons'

/**
 * Repeating content card for the horizontal scroll rows.
 * No border, no shadow — separation comes from the white card sitting on the
 * off-white canvas, per DESIGN.md.
 */
export function ListingCard({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false)

  return (
    <article className="group w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-cards bg-muted-surface">
        {/* Placeholder for full-bleed property photography */}
        <div className="size-full" style={{ background: listing.tint }} />

        {listing.guestFavorite && (
          <span className="absolute left-3 top-3 rounded-badges bg-white px-3 py-1.5 text-micro font-semibold text-hof shadow-tooltip">
            Guest favorite
          </span>
        )}

        <button
          type="button"
          onClick={() => setSaved((current) => !current)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${listing.title} from wishlist` : `Save ${listing.title} to wishlist`}
          className="absolute right-1 top-1 grid size-12 place-items-center rounded-buttons"
        >
          <HeartIcon size={20} active={saved} />
        </button>
      </div>

      {/* Image and text share the 12px gutter — no padding between them */}
      <div className="pt-3">
        <div className="flex items-baseline gap-2">
          <h3 className="min-w-0 flex-1 truncate text-body font-medium text-hof">
            {listing.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-body text-hof">
            <StarIcon size={12} />
            {listing.rating.toFixed(2)}
          </span>
        </div>
        <p className="truncate text-body text-foggy">{listing.meta}</p>
        <p className="truncate text-body text-hof">
          <span className="font-semibold">{listing.price}</span> for {listing.nights} nights
        </p>
      </div>
    </article>
  )
}
