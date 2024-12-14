import { Button } from "@/components/ui/button";

export function LinkCard({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full p-1hover:scale-105 transition-all mb-3 max-w-3xl"
    >
      <Button className="flex justify-center items-center w-full py-3">
        {title}
      </Button>
    </a>
  );
}
