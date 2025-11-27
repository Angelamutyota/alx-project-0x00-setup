import type { FC } from 'react'

const Rating: FC<{ value: number }> = ({ value }) => {
  const full = Math.round(value * 2) / 2 // round to nearest 0.5
  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1
        const isFull = full >= idx
        const isHalf = !isFull && full + 0.5 >= idx
        return (
          <span key={i} aria-hidden className="text-yellow-500 text-sm">
            {isFull ? '★' : isHalf ? '⯨' : '☆'}
          </span>
        )
      })}
    </div>
  )
}

export default Rating
