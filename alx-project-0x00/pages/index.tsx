import type { NextPage } from 'next'
import PropertyCard from '../components/PropertyCard'
import type { Property } from '../interfaces/property'

const sampleData: Property[] = [
  {
    id: '1',
    title: 'Sunny Studio by the Sea',
    location: 'Mombasa, Kenya',
    pricePerNight: 4500,
    rating: 4.6,
    reviewsCount: 84,
    imageSrc: '/images/studio1.jpg',
  },
  {
    id: '2',
    title: 'Cozy Treehouse Escape',
    location: 'Diani, Kenya',
    pricePerNight: 7500,
    rating: 4.9,
    reviewsCount: 120,
    imageSrc: '/images/treehouse.jpg',
  },
]

const Home: NextPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Properties</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {sampleData.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </main>
  )
}

export default Home
