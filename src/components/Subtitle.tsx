import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function Subtitle({ text }: { text: string }) {
  return (
    <TextGenerateEffect
      duration={1}
      words={text}
      className="text-xl mb-2 mt-2 flex items-center"
    />
  );
}
