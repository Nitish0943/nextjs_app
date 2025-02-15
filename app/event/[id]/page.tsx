import EventDetails from "@/app/components/EventDetails";

interface PageProps {
  params: { id: string };
}

export default function EventPage({ params }: PageProps) {
  return <EventDetails eventId={params.id} />;
}
