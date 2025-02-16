import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Solutions from "@/components/Solutions"
import Services from "@/components/Services"
import Properties from "@/components/Properties"
import TrendingChoices from "@/components/TrendingChoices"
import OurAim from "@/components/OurAim"
import MobileApp from "@/components/MobileApp"
import Testimonials from "@/components/Testimonials"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <Solutions />
      <Services />
      <Properties />
      <TrendingChoices />
      <OurAim />
      <MobileApp />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  )
}

