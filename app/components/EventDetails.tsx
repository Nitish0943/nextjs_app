import { Calendar, MapPin, Bell } from "lucide-react"

export default function EventDetails({ eventId }: { eventId: string }) {
  // In a real application, you would fetch the event details using the eventId
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Tech Conference 2023</h2>
            <p className="text-gray-600 mb-4">
              <Calendar className="inline-block h-5 w-5 mr-2 text-purple-600" />
              September 15, 2023
            </p>
            <p className="text-gray-600 mb-6">
              <MapPin className="inline-block h-5 w-5 mr-2 text-purple-600" />
              San Francisco, CA
            </p>
            <p className="text-gray-700 mb-6">
              Join us for the biggest tech conference of the year! Featuring keynote speakers, workshops, and networking
              opportunities with industry leaders.
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300">
                Register Now
              </button>
              <button className="flex items-center border border-purple-600 text-purple-600 py-2 px-6 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
                <Bell className="h-5 w-5 mr-2" />
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

