import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function AvatarComponent({
  src,
  fallback,
}: {
  src: string;
  fallback: string;
}) {
  return (
    <Avatar className="w-24 h-24 mb-2">
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
