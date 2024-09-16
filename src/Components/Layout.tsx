import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isVisible }) => {
  return (
    <div className="flex overflow-hidden flex-col h-screen bg-black ">
      <Header isVisible={isVisible} />
      <main className="flex-grow p-4 max-md:px-5 md:h-[88%]">{children}</main>
    </div>
  );
};

export default Layout;
