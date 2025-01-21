import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ReusableDialogProps {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

const ReusableDialog = ({
  title,
  open,
  onOpenChange,
  children,
  className = "",
  width = "50vw"
}: ReusableDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`!rounded-[20px] px-9 overflow-y-scroll scrollbar-hidden max-h-[80vh] ${className}`}
        style={{
          maxWidth: width,
        }}
      >
        <DialogTitle className="text-xl font-bold text-grey border-b border-borderColor pb-2">
          {title}
        </DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
