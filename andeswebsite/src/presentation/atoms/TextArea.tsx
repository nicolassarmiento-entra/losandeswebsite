import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextArea = ({
  label,
  error,
  id,
  className = "",
  ...props
}: TextAreaProps) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-neutral-700 mb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-gray-50 border border-gray-200
          focus:border-andes-main focus:ring-2 focus:ring-andes-main/20
          transition-colors outline-none resize-none
          text-neutral-900 placeholder-neutral-400
          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
