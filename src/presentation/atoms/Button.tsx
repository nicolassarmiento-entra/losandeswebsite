import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-andes-main hover:bg-red-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
  secondary:
    "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm",
  ghost:
    "bg-transparent text-andes-main hover:bg-andes-main/5 border border-transparent",
};

const Button = ({
  variant = "primary",
  children,
  fullWidth = false,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg text-sm font-semibold
        transition-all duration-300
        flex items-center justify-center gap-2
        cursor-pointer
        ${variantStyles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-sm">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
