import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EasyLife</h3>
            <p>Simplifying your daily life with our comprehensive services.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/properties">Properties</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 EasyLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

