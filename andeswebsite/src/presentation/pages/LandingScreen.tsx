import type { ReactNode } from "react";

const LandingScreen = ({ children }: { children: ReactNode }) => {
  return <main className="flex-1">{children}</main>;
};

export default LandingScreen;
