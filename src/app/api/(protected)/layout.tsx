// import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div style={{ overflowY: "auto", minHeight: "100vh" }}>
      <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
