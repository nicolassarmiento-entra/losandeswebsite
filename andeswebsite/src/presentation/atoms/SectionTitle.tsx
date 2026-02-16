import Icon from "./Icon";

interface SectionTitleProps {
  children: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({
  children,
  subtitle,
  centered = false,
}: SectionTitleProps) => {
  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      {centered && <div className="w-16 h-1 bg-andes-main mb-6" />}
      {!centered && (
        <div className="flex items-center gap-2 mb-2">
          <Icon name="play_arrow" className="text-andes-main" size="lg" />
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            {children}
          </h2>
        </div>
      )}
      {centered && (
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
          {children}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-neutral-500 mt-2 ${centered ? "max-w-2xl mx-auto" : "max-w-lg"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
