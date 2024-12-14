export function Title({
  text,
  extraClass = "text-white",
}: {
  text: string;
  extraClass?: string;
}) {
  return <h1 className={`text-2xl font-bold ${extraClass}`}>{text}</h1>;
}
