export type Listing = {
  id: string
  title: string
  meta: string
  price: string
  nights: number
  rating: number
  guestFavorite: boolean
  /** Placeholder photography stand-in until real imagery is wired up. */
  tint: string
}

export type ListingSection = {
  id: string
  title: string
  listings: Listing[]
}

/**
 * Placeholder tints stand in for the full-bleed property photography the real
 * product uses. They are warm, low-saturation washes so the card composition
 * reads correctly without pulling focus from the Rausch accent.
 */
const TINTS = [
  'linear-gradient(135deg, #d8c3ad 0%, #b39b7f 100%)',
  'linear-gradient(135deg, #c9d4c5 0%, #93a58f 100%)',
  'linear-gradient(135deg, #e0cfc0 0%, #bda898 100%)',
  'linear-gradient(135deg, #c5cdd8 0%, #8f9bab 100%)',
  'linear-gradient(135deg, #dcd0c0 0%, #a89584 100%)',
  'linear-gradient(135deg, #cfc4d4 0%, #9a8ea3 100%)',
  'linear-gradient(135deg, #d4c8b8 0%, #ab9c86 100%)',
]

function makeListings(prefix: string, entries: Array<Omit<Listing, 'id' | 'tint'>>): Listing[] {
  return entries.map((entry, index) => ({
    ...entry,
    id: `${prefix}-${index}`,
    tint: TINTS[index % TINTS.length],
  }))
}

export const SECTIONS: ListingSection[] = [
  {
    id: 'popular-homes',
    title: 'Popular homes in Da Nang',
    listings: makeListings('popular', [
      { title: 'Apartment in My An', meta: 'Jul 31 – Aug 5 · Business host', price: '₫1,240,000', nights: 2, rating: 4.92, guestFavorite: true },
      { title: 'Villa in Ngu Hanh Son', meta: 'Aug 2 – Aug 7 · Superhost', price: '₫3,850,000', nights: 2, rating: 4.88, guestFavorite: false },
      { title: 'Studio in Son Tra', meta: 'Jul 29 – Aug 3 · Business host', price: '₫890,000', nights: 2, rating: 4.75, guestFavorite: false },
      { title: 'Loft near My Khe Beach', meta: 'Aug 5 – Aug 10 · Superhost', price: '₫1,620,000', nights: 2, rating: 4.96, guestFavorite: true },
      { title: 'Bungalow in Hoa Hai', meta: 'Aug 8 – Aug 13 · Business host', price: '₫2,100,000', nights: 2, rating: 4.81, guestFavorite: false },
      { title: 'Condo in Hai Chau', meta: 'Jul 30 – Aug 4 · Superhost', price: '₫1,050,000', nights: 2, rating: 4.9, guestFavorite: true },
      { title: 'Penthouse in An Thuong', meta: 'Aug 1 – Aug 6 · Business host', price: '₫4,320,000', nights: 2, rating: 4.94, guestFavorite: false },
      { title: 'Homestay in Thanh Khe', meta: 'Aug 3 – Aug 8 · Superhost', price: '₫760,000', nights: 2, rating: 4.69, guestFavorite: false },
      { title: 'Sea-view suite in Son Tra', meta: 'Aug 6 – Aug 11 · Superhost', price: '₫2,940,000', nights: 2, rating: 4.99, guestFavorite: true },
      { title: 'Townhouse in Lien Chieu', meta: 'Jul 31 – Aug 5 · Business host', price: '₫980,000', nights: 2, rating: 4.71, guestFavorite: false },
    ]),
  },
  {
    id: 'great-hotels',
    title: 'Available next weekend in Hoi An',
    listings: makeListings('hoian', [
      { title: 'Garden house in Cam Chau', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫1,480,000', nights: 2, rating: 4.97, guestFavorite: true },
      { title: 'Riverside villa in Cam Nam', meta: 'Aug 9 – Aug 11 · Business host', price: '₫2,760,000', nights: 2, rating: 4.85, guestFavorite: false },
      { title: 'Boutique room in Old Town', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫960,000', nights: 2, rating: 4.79, guestFavorite: true },
      { title: 'Beach bungalow in An Bang', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫2,240,000', nights: 2, rating: 4.93, guestFavorite: false },
      { title: 'Rice-field retreat in Tra Que', meta: 'Aug 9 – Aug 11 · Business host', price: '₫1,830,000', nights: 2, rating: 4.87, guestFavorite: true },
      { title: 'Pool house in Thanh Ha', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫3,110,000', nights: 2, rating: 4.9, guestFavorite: false },
      { title: 'Loft in Cam Thanh', meta: 'Aug 9 – Aug 11 · Business host', price: '₫1,190,000', nights: 2, rating: 4.72, guestFavorite: false },
      { title: 'Courtyard house in Minh An', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫1,650,000', nights: 2, rating: 4.88, guestFavorite: false },
      { title: 'Lantern studio in Son Phong', meta: 'Aug 9 – Aug 11 · Business host', price: '₫840,000', nights: 2, rating: 4.76, guestFavorite: true },
      { title: 'Farm villa in Cam Kim', meta: 'Aug 9 – Aug 11 · Superhost', price: '₫2,530,000', nights: 2, rating: 4.94, guestFavorite: false },
    ]),
  },
  {
    id: 'stay-in-hanoi',
    title: 'Stay in Hanoi',
    listings: makeListings('hanoi', [
      { title: 'Apartment in Tay Ho', meta: 'Aug 14 – Aug 19 · Superhost', price: '₫1,340,000', nights: 2, rating: 4.89, guestFavorite: true },
      { title: 'Room in Hoan Kiem', meta: 'Aug 12 – Aug 17 · Business host', price: '₫720,000', nights: 2, rating: 4.68, guestFavorite: false },
      { title: 'Townhouse in Ba Dinh', meta: 'Aug 16 – Aug 21 · Superhost', price: '₫2,480,000', nights: 2, rating: 4.95, guestFavorite: true },
      { title: 'Studio in Dong Da', meta: 'Aug 11 – Aug 16 · Business host', price: '₫810,000', nights: 2, rating: 4.7, guestFavorite: false },
      { title: 'Lakeside flat in Truc Bach', meta: 'Aug 18 – Aug 23 · Superhost', price: '₫1,570,000', nights: 2, rating: 4.91, guestFavorite: false },
      { title: 'Duplex in Cau Giay', meta: 'Aug 13 – Aug 18 · Business host', price: '₫1,120,000', nights: 2, rating: 4.83, guestFavorite: true },
      { title: 'Attic room in Hai Ba Trung', meta: 'Aug 15 – Aug 20 · Superhost', price: '₫640,000', nights: 2, rating: 4.77, guestFavorite: false },
      { title: 'Old-quarter loft in Hang Bac', meta: 'Aug 17 – Aug 22 · Business host', price: '₫1,880,000', nights: 2, rating: 4.85, guestFavorite: true },
      { title: 'Garden flat in Long Bien', meta: 'Aug 10 – Aug 15 · Superhost', price: '₫930,000', nights: 2, rating: 4.73, guestFavorite: false },
      { title: 'Penthouse in Nam Tu Liem', meta: 'Aug 19 – Aug 24 · Business host', price: '₫3,640,000', nights: 2, rating: 4.96, guestFavorite: false },
    ]),
  },
  {
    id: 'available-next-month',
    title: 'Available next month in Da Lat',
    listings: makeListings('dalat', [
      { title: 'Pine cabin in Ward 4', meta: 'Sep 3 – Sep 8 · Superhost', price: '₫1,290,000', nights: 2, rating: 4.94, guestFavorite: true },
      { title: 'Hillside villa in Ward 10', meta: 'Sep 5 – Sep 10 · Business host', price: '₫3,420,000', nights: 2, rating: 4.86, guestFavorite: false },
      { title: 'Cottage near Tuyen Lam', meta: 'Sep 1 – Sep 6 · Superhost', price: '₫1,760,000', nights: 2, rating: 4.92, guestFavorite: true },
      { title: 'Studio in Ward 2', meta: 'Sep 9 – Sep 14 · Business host', price: '₫870,000', nights: 2, rating: 4.74, guestFavorite: false },
      { title: 'Farmhouse in Trai Mat', meta: 'Sep 6 – Sep 11 · Superhost', price: '₫2,050,000', nights: 2, rating: 4.9, guestFavorite: false },
      { title: 'Glass house in Ward 8', meta: 'Sep 12 – Sep 17 · Business host', price: '₫4,180,000', nights: 2, rating: 4.98, guestFavorite: true },
      { title: 'Loft in Ward 1', meta: 'Sep 2 – Sep 7 · Superhost', price: '₫1,430,000', nights: 2, rating: 4.8, guestFavorite: false },
      { title: 'A-frame in Ward 5', meta: 'Sep 8 – Sep 13 · Superhost', price: '₫1,980,000', nights: 2, rating: 4.91, guestFavorite: true },
      { title: 'Coffee-farm stay in Xuan Truong', meta: 'Sep 4 – Sep 9 · Business host', price: '₫1,110,000', nights: 2, rating: 4.78, guestFavorite: false },
      { title: 'Lake cabin in Ward 3', meta: 'Sep 10 – Sep 15 · Superhost', price: '₫2,370,000', nights: 2, rating: 4.89, guestFavorite: false },
    ]),
  },
]
