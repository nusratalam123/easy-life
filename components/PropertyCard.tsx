"use client"

import { Heart, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  rating: number
  reviewCount: string
  sqft: string
  beds: number
  baths: number
  userImage?: string
}

export default function PropertyCard({
  image,
  title,
  location,
  rating,
  reviewCount,
  sqft,
  beds,
  baths,
  userImage = "/placeholder.svg",
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full aspect-[16/10] object-cover" />
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute -bottom-6 left-6">
          <img
            src={userImage || "/placeholder.svg"}
            alt="Agent"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
      </div>

      <div className="p-6 pt-8">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
          <span className="text-sm font-medium ml-1">{rating}</span>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-gray-500">{sqft}</span>
          </div>
          <div className="flex items-center justify-center gap-2 border-x border-gray-100">
            <span className="text-sm text-gray-500">Bed {beds}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-gray-500">Bath {baths}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-4 bg-[#ebfaf1] text-[#12b76a] border-[#12b76a] hover:bg-[#12b76a] hover:text-white"
        >
          Details
        </Button>
      </div>
    </div>
  )
}

