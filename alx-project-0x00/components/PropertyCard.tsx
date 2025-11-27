import Image from 'next/image'
import type { FC } from 'react'
import type { Property } from '../interfaces/property'
import Rating from './Rating'

const PropertyCard: FC<{ property: Property }> = ({ property }) => {
  return (
    <article className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white">
      <div className="relative w-full h-48">
        <Image
          src={property.imageSrc}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rating value={property.rating} />
            <span className="text-sm text-gray-600">({property.reviewsCount ?? 0})</span>
          </div>

          <div className="text-right">
            <div className="text-base font-medium">KES {property.pricePerNight}</div>
            <div className="text-xs text-gray-500">night</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard
