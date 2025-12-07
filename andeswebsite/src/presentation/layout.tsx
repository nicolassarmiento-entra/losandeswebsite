const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-cols-12 align-center justify-center">
      {children}
    </div>
  );
};

export default LayoutComponent;
