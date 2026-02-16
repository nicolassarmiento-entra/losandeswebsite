interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterPill = ({ label, isActive, onClick }: FilterPillProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-full text-sm font-medium
        shadow-sm transition-all cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-andes-main
        ${
          isActive
            ? "bg-andes-main text-white shadow-md hover:bg-red-700"
            : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-andes-main border border-gray-200"
        }
      `}
    >
      {label}
    </button>
  );
};

export default FilterPill;
