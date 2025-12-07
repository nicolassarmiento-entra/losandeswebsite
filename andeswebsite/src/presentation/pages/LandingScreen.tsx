const LandingScreen = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <>
      <div className="col-span-1 h-auto bg-blue-100"></div>
      <div className="col-span-10 h-auto bg-green-100">{children}</div>
      <div className="col-span-1 h-auto bg-blue-100"></div>
    </>
  );
};

export default LandingScreen;
