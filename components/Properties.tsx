"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import PropertyCard from "./PropertyCard"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Properties() {
  const properties = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-3Ue44NTcAUaGgwz4kP0q9k1SqHrXot.png",
      title: "West Square Apartments",
      location: "18 Broklyn Street, New York",
      rating: 5.0,
      reviewCount: "1",
      sqft: "1860 sqft",
      beds: 5,
      baths: 2,
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-3Ue44NTcAUaGgwz4kP0q9k1SqHrXot.png",
      title: "Peninsula Apartments",
      location: "18 Broklyn Street, New York",
      rating: 4.0,
      reviewCount: "1",
      sqft: "1860 sqft",
      beds: 6,
      baths: 3,
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services-3Ue44NTcAUaGgwz4kP0q9k1SqHrXot.png",
      title: "Eaton Garth Penthouse",
      location: "18 Broklyn Street, New York",
      rating: 5.0,
      reviewCount: "1",
      sqft: "1860 sqft",
      beds: 6,
      baths: 3,
    },
  ]

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-red-800">Featured Properties</h2>
          <p className="text-red-600">Explore our handpicked properties</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="property-swiper"
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <PropertyCard {...property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

