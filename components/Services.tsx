"use client"

import { Utensils, Home, Truck, ChefHat, GraduationCap, Package, Apple } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const services = [
  {
    icon: Utensils,
    title: "Find Mess",
    description: "Discover affordable mess options",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Home,
    title: "Rent Flat",
    description: "Find your ideal living space",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Truck,
    title: "Hire Vehicles",
    description: "Easy moving solutions",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: ChefHat,
    title: "Book Women Chefs",
    description: "Experienced culinary experts",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: GraduationCap,
    title: "Find Tutors",
    description: "Quality education at your fingertips",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Package,
    title: "Sell Old Utilities",
    description: "Give your old items a new home",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Apple,
    title: "Food Management",
    description: "Efficient food planning and prep",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="mr-2 h-6 w-6" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

