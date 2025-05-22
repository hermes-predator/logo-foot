
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackToButtonProps {
  to: string;
  label: string;
  className?: string;
}

const BackToButton = ({ to, label, className = "" }: BackToButtonProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        asChild
        className="flex items-center gap-1 hover:bg-blue-50 transition-colors"
      >
        <Link to={to}>
          <ArrowLeft className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      </Button>
    </div>
  );
};

export default BackToButton;
