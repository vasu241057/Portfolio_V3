import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isVisible }) => {
  return (
    <div className=" overflow-hidden h-screen bg-black grid grid-rows-12 ">
      <div className="row-span-1 ">
        <Header isVisible={isVisible} />
      </div>
      <main className="p-4 pb-3 max-md:px-5 row-span-11 mt-[1.75%]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
