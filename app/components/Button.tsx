import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  rounded = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        rounded-2xl 
        p-3
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        lg:border-r-[1px]
        dark:border-slate-600
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary
          ? "text-white bg-neutral-100 hover:bg-sky-500 rounded-2xl  dark:bg-gray-700  "
          : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
        rounded && "rounded-full bg-gray-200 dark:bg-gray-700"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
