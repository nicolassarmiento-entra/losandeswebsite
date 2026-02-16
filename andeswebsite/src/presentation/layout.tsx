import type { ReactNode } from "react";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-andes-bg">{children}</div>
  );
};

export default LayoutComponent;
