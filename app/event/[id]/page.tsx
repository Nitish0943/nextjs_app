import EventDetails from "@/app/components/EventDetails"

export default function EventPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the event details using the id
  return <EventDetails eventId={params.id} />
}

