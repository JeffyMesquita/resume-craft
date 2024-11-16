// import {} from

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@/components/ui";

import { cn } from "@/lib/utils";

export function CustomDialog({
  title,
  description,
  children,
  content,
  open,
  setOpen,
  hasFooter,
  footerAction,
  footerActionHandler,
  className,
  headerClassName,
  footerClassName,
}: CustomDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger>{children}</DialogTrigger>}
      <DialogContent className={cn("", className)}>
        <DialogHeader className={cn("", headerClassName)}>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {description && <DialogDescription>{description}</DialogDescription>}
        {content}
      </DialogContent>
      {hasFooter && (
        <DialogFooter className={cn("", footerClassName)}>
          <Button variant="ghost" onClick={() => setOpen && setOpen(false)}>
            Cancelar
          </Button>
          <button onClick={footerActionHandler}>{footerAction}</button>
        </DialogFooter>
      )}
    </Dialog>
  );
}
