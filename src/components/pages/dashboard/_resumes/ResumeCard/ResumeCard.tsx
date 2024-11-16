import { cn } from "@/lib/utils";
import Link from "next/link";

export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton
        title="Criar novo currículo"
        description="Crie um novo currículo do zero"
      />
    </Link>
  );
}

export function ResumeCardButton({
  title,
  description,
  icon,
}: ResumeCardButtonProps) {
  return (
    <button
      className={cn(
        "h-[18.75rem] w-full rounded border border-muted-foreground/20 bg-muted/50",
        "relative flex items-center justify-center overflow-hidden outline-none",
        "transition-all duration-300 ease-in-out hover:brightness-105 dark:hover:brightness-125",
      )}
    >
      {icon}

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background/80 p-3 text-left">
        <p className="font-title text-sm font-semibold">{title}</p>
        <span className="block text-xs text-muted-foreground">
          {description}
        </span>
      </div>
    </button>
  );
}
