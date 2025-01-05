export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return <p className="text-red-500 text-sm">{message?.split(",")[0]}</p>;
}
