declare global {
  type NavItemIcon = ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

declare global {
  type NavItemProps = {
    label: string;
    Icon: NavItemIcon;
    path: string;
  };
}

export {};
