"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Filter } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Tech Conference 2023",
    date: "2023-09-15",
    location: "San Francisco, CA",
    category: "Technology",
  },
  {
    id: 2,
    title: "Music Festival",
    date: "2023-10-01",
    location: "Austin, TX",
    category: "Music",
  },
  {
    id: 3,
    title: "Career Fair",
    date: "2023-09-20",
    location: "New York, NY",
    category: "Career",
  },
]

export default function EventListings() {
  const [filter, setFilter] = useState("")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center text-gray-600 hover:text-purple-600">
            <Filter className="h-5 w-5 mr-2" />
            Filter Events
          </button>
          <div className="flex space-x-4">
            <select
              className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Music">Music</option>
              <option value="Career">Career</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter((event) => !filter || event.category === filter)
            .map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <Calendar className="inline-block h-5 w-5 mr-2 text-purple-600" />
                    {event.date}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <MapPin className="inline-block h-5 w-5 mr-2 text-purple-600" />
                    {event.location}
                  </p>
                  <Link
                    href={`/event/${event.id}`}
                    className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

