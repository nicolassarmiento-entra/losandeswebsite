const LandingScreen = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <>
      <div className="col-span-1 h-auto"></div>
      <div className="col-span-10 h-auto">{children}</div>
      <div className="col-span-1 h-auto"></div>
    </>
  );
};

export default LandingScreen;
