import { useData } from "@/stores/data-store";

export default function LocationResult() {
  const { data } = useData();

  // Check if latitude and longitude are available
  if (!data.lat || !data.long) {
    return <div>Loading...</div>; // Or handle the case when data is not available
  }

  return (
    <div className="flex flex-col items-center h-72">
      <iframe
        className="rounded-xl w-full h-full"
        // width="500"
        // height="300"
        style={{ border: 0 }} // Use CSS to remove the border
        scrolling="no"
        src={`https://maps.google.com/maps?q=${data.lat},${data.long}&hl=id&z=14&output=embed`}
        title="Google Map" // Add a title for accessibility
      ></iframe>
    </div>
  );
}
