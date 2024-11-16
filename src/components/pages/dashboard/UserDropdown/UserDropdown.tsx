import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components";
import { LogOutIcon, SquareUserIcon } from "lucide-react";
import Link from "next/link";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start gap-2 px-2">
          <Avatar className="block size-7">
            <AvatarImage
              src="https://github.com/jeffymesquita.png"
              alt="Avatar"
            />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          <p>Jeffy Mesquita</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUserIcon className="size-4" />
            Configurações de Conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="gap-2 text-red-500 hover:font-medium hover:text-red-600 dark:hover:font-medium dark:hover:text-red-400">
          <LogOutIcon className="size-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
