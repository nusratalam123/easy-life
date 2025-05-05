import { Button } from "@/components/ui/button"
import { Apple, SmartphoneIcon } from "lucide-react"

export default function MobileApp() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get the EasyLife Mobile App</h2>
            <p className="text-lg mb-6">
              Access all our services on the go. Download our mobile app now and experience convenience at your
              fingertips.
            </p>
            <div className="flex space-x-4">
              <Button className="flex items-center">
                <Apple className="mr-2" /> App Store
              </Button>
              <Button className="flex items-center">
                <SmartphoneIcon className="mr-2" /> Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=300" alt="EasyLife Mobile App" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

