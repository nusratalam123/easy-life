import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-800">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Input type="text" placeholder="Subject" required />
            <Textarea placeholder="Your Message" rows={5} required />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

