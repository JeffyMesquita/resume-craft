"use client";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { NewspaperIcon, SquareUserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS: NavItemProps[] = [
  {
    label: "Currículos",
    Icon: NewspaperIcon,
    path: "/dashboard/resumes",
  },
  {
    label: "Configurações de conta",
    Icon: SquareUserIcon,
    path: "/dashboard/account",
  },
];

export function NavItems() {
  const pathName = usePathname();

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {NAV_ITEMS.map((item) => {
        const Icon: NavItemIcon = item.Icon;
        const isActive = pathName.startsWith(item.path);

        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant="ghost"
              className={cn("w-full justify-start gap-2", {
                "bg-accent": isActive,
              })}
            >
              <Icon className="h-6 w-6" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
