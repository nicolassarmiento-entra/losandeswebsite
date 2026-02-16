import type { FooterLinkGroup } from "../../types/types";

interface FooterColumnProps {
  group: FooterLinkGroup;
}

const FooterColumn = ({ group }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-andes-main rounded-full" />
        {group.title}
      </h3>
      <ul className="space-y-3">
        {group.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
