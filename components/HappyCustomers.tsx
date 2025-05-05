import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function HappyCustomers() {
  const testimonials = [
    { name: "John Doe", comment: "EasyLife made finding a mess so simple! Highly recommended.", rating: 5 },
    { name: "Jane Smith", comment: "I found my dream flat thanks to EasyLife. Great service!", rating: 4 },
    { name: "Mike Johnson", comment: "The moving vehicle service saved me so much hassle. Thank you!", rating: 5 },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{testimonial.comment}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

