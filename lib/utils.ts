import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine all utility functions into a single export
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', { // Changed to Indian Rupees based on context
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(price)
}

const formatDate = (date: string) => {
  try {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
    })
  } catch (error) {
    return 'Invalid date'
  }
}

const formatRating = (rating: number) => {
  if (typeof rating !== 'number' || rating < 0 || rating > 5) {
    return 0
  }
  return Math.round(rating * 2) / 2
}

export {
  cn,
  formatPrice,
  formatDate,
  formatRating
}
