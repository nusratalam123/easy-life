import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          EasyLife
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/solutions" className="text-gray-600 hover:text-primary">
            Solutions
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="/properties" className="text-gray-600 hover:text-primary">
            Properties
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

