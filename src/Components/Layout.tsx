import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isVisible }) => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header isVisible={isVisible} />
      <main className="flex-grow p-6 max-md:px-5 md:max-h-full md:h-[80%]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
