import Logo from "@/assets/logo.svg";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[18.75rem,1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-r border-muted">
        <section className="w-full border-b border-muted p-6">
          <Logo className="max-[6.25rem] mx-auto" />
        </section>
        sidebar
      </aside>

      <main>{children}</main>
    </div>
  );
}
