interface EventDetailsProps {
  eventId: string;
}

export default function EventDetails({ eventId }: EventDetailsProps) {
  return <div>Event ID: {eventId}</div>;
}
