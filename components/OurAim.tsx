import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const aims = [
  {
    title: "Simplify Daily Life",
    description: "We strive to make your everyday tasks easier and more efficient.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Quality Services",
    description: "We are committed to providing top-notch services in every interaction.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We aim to exceed your expectations.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function OurAim() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Aim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aims.map((aim, index) => (
            <Card key={index}>
              <CardHeader>
                <img
                  src={aim.image || "/placeholder.svg"}
                  alt={aim.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{aim.title}</CardTitle>
                <p className="text-gray-600">{aim.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

