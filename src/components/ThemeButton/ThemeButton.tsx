import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonClasses = cva(
  "transition-all font-light flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white px-6 hover:bg-[#20828c] py-3",
        outline: "border-2 border-white text-white px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonClasses> {}

const ThemeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ThemeButton(props, forwardedRef) {
    const { children, variant, className } = props;
    return (
      <button
        ref={forwardedRef}
        {...props}
        className={`${buttonClasses({ variant, className })}`}
      >
        {children}
      </button>
    );
  }
);

export default ThemeButton;
