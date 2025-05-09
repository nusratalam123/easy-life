import { Building2, Warehouse, Home, Building, Store } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "Commercial",
    count: "6 Properties",
  },
  {
    icon: Warehouse,
    title: "Warehouse",
    count: "6 Properties",
  },
  {
    icon: Home,
    title: "Villa",
    count: "6 Properties",
  },
  {
    icon: Building,
    title: "Apartment",
    count: "6 Properties",
  },
  {
    icon: Store,
    title: "Homestay",
    count: "6 Properties",
  },
]

export default function Solutions() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">Our Solutions</h2>
          <p className="text-red-600">Choose from our wide range of properties</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-red-200 hover:border-red-500 transition-all group cursor-pointer bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-200">
                  <solution.icon className="w-8 h-8 text-red-600 group-hover:text-red-700" />
                </div>
                <h3 className="text-red-800 text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-red-600 text-sm">{solution.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

