
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'link';

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  className,
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-pioneer-deep-blue text-white hover:bg-pioneer-deep-blue/90';
      case 'secondary':
        return 'bg-pioneer-light-blue text-white hover:bg-pioneer-light-blue/90';
      case 'accent':
        return 'bg-pioneer-green text-white hover:bg-pioneer-green/90';
      case 'outline':
        return 'bg-transparent border border-pioneer-deep-blue text-pioneer-deep-blue hover:bg-pioneer-deep-blue/10';
      case 'link':
        return 'bg-transparent text-pioneer-light-blue hover:underline p-0 h-auto';
      default:
        return 'bg-pioneer-deep-blue text-white hover:bg-pioneer-deep-blue/90';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1';
      case 'lg':
        return 'text-lg px-6 py-3';
      default:
        return 'px-4 py-2';
    }
  };

  return (
    <Button
      className={cn(
        getVariantClasses(),
        getSizeClasses(),
        'rounded-md font-medium transition-all flex items-center gap-2',
        fullWidth ? 'w-full' : '',
        variant !== 'link' ? 'shadow-sm' : '',
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {rightIcon}
    </Button>
  );
};

export default ButtonCustom;
