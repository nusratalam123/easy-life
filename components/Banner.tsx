"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Banner() {
  const slides = [
    {
      title: "Find Your Perfect Home",
      description: "Discover a wide range of properties tailored to your needs.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Effortless Property Management",
      description: "Let us handle your property needs with our comprehensive services.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Invest in Your Future",
      description: "Explore lucrative real estate investment opportunities with us.",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ]

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{slide.title}</h2>
              <p className="text-xl md:text-2xl text-center max-w-2xl">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

