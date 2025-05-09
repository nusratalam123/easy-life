import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const trendingPosts = [
  {
    title: "Top 5 Affordable Mess Options in the City",
    date: "2023-07-01",
    image: "/placeholder.svg?height=200&width=300",
    excerpt: "Discover budget-friendly dining options that don't compromise on taste or quality.",
  },
  {
    title: "How to Find the Perfect Flat for Your Needs",
    date: "2023-06-28",
    image: "/placeholder.svg?height=200&width=300",
    excerpt: "Learn the key factors to consider when searching for your ideal living space in the city.",
  },
  {
    title: "The Ultimate Guide to Hiring Moving Vehicles",
    date: "2023-06-25",
    image: "/placeholder.svg?height=200&width=300",
    excerpt: "Everything you need to know about renting the right vehicle for your next move.",
  },
  {
    title: "Why Hiring a Women Chef Can Transform Your Dining Experience",
    date: "2023-06-22",
    image: "/placeholder.svg?height=200&width=300",
    excerpt: "Explore the unique perspectives and culinary skills that women chefs bring to the table.",
  },
]

export default function TrendingChoices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-800">Trending Choices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                <CardDescription className="text-sm mb-2">Posted on: {post.date}</CardDescription>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

