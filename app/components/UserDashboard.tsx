import { Calendar, Star, Clock } from "lucide-react"

export default function UserDashboard() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              Recommended Events
            </h3>
            <ul className="space-y-2">
              <li>AI and Machine Learning Workshop</li>
              <li>Startup Networking Mixer</li>
              <li>Digital Marketing Conference</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-purple-600" />
              Upcoming Events
            </h3>
            <ul className="space-y-2">
              <li>Tech Conference 2023 - Sep 15</li>
              <li>Career Fair - Sep 20</li>
              <li>Music Festival - Oct 01</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              Event History
            </h3>
            <ul className="space-y-2">
              <li>Web Development Bootcamp</li>
              <li>Entrepreneurship Summit</li>
              <li>Data Science Symposium</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

