
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ComprehensiveSchoolInfo from "./ComprehensiveSchoolInfo";

interface SchoolInfoModalProps {
  open: boolean;
  onClose: () => void;
}

const SchoolInfoModal: React.FC<SchoolInfoModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">School Information</DialogTitle>
        </DialogHeader>
        <ComprehensiveSchoolInfo />
      </DialogContent>
    </Dialog>
  );
};

export default SchoolInfoModal;
