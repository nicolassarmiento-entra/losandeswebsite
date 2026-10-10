interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "filled" | "outlined";
  className?: string;
}

const sizeMap: Record<string, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
  xl: "text-2xl",
};

const Icon = ({
  name,
  size = "md",
  variant = "outlined",
  className = "",
}: IconProps) => {
  const iconClass =
    variant === "filled" ? "material-icons" : "material-symbols-outlined";

  return (
    <span className={`${iconClass} ${sizeMap[size]} ${className}`}>{name}</span>
  );
};

export default Icon;
