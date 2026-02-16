import type { ProjectStatus } from "../../types/types";

interface BadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  "en-venta": { label: "En Venta", color: "bg-green-500" },
  "pre-venta": { label: "Pre Venta", color: "bg-orange-500" },
  proximamente: { label: "Próximamente", color: "bg-blue-500" },
};

const Badge = ({ status, className = "" }: BadgeProps) => {
  const { label, color } = statusConfig[status];

  return (
    <span
      className={`
        ${color} text-white text-xs font-bold
        px-3 py-1 rounded-full shadow-md
        uppercase tracking-wide
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Badge;
