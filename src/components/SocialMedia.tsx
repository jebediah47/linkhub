import { Icon } from "@iconify/react";

export function SocialMedia({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full my-2 max-w-3xl"
    >
      <Icon icon={icon} className="text-3xl flex mx-1" />
    </a>
  );
}
