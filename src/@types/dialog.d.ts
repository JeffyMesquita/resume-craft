declare global {
  type BaseDialogProps = {
    title: string;
    description?: string;
    content: ReactNode;
    children: ReactNode;
    open?: boolean;
    hasFooter?: boolean;
    className?: string;
    headerClassName?: string;
    footerClassName?: string;
  };

  type DialogPropsWithFooter = BaseDialogProps & {
    hasFooter: true;
    setOpen: (open: boolean) => void;
    footerAction: string;
    footerActionHandler: () => void;
  };

  type DialogPropsWithoutFooter = BaseDialogProps & {
    hasFooter?: false;
    setOpen?: (open: boolean) => void;
    footerAction?: string;
    footerActionHandler?: () => void;
  };

  type CustomDialogProps = DialogPropsWithFooter | DialogPropsWithoutFooter;
}

export {};
