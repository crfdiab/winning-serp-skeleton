
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface ConsultationButtonProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

const ConsultationButton = ({
  className,
  size = 'default',
  variant = 'default'
}: ConsultationButtonProps) => {
  return (
    <Button 
      className={`font-medium relative overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      size={size}
      variant={variant}
    >
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>Book Consultation</span>
      </span>
    </Button>
  );
};

export default ConsultationButton;
