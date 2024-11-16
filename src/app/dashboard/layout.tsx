import Logo from "@/assets/logo.svg";
import { NavItems, ThemeToggle, UserDropdown } from "@/components";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[18.75rem,1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-r border-muted">
        <section className="w-full border-b border-muted p-6">
          <Logo className="mx-auto max-w-[6.25rem]" />
        </section>
        <NavItems />

        <footer className="mt-auto flex w-full items-center justify-between border-t border-muted px-3 py-4">
          <UserDropdown />
          <ThemeToggle />
        </footer>
      </aside>

      <main className="flex h-full w-full flex-col overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}
