import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
}

const SocialIcon = ({ href, label, children }: SocialIconProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 hover:bg-andes-main flex items-center justify-center transition-colors duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-gray-400 group-hover:text-white transition-colors">
        {children}
      </span>
    </a>
  );
};

export default SocialIcon;
