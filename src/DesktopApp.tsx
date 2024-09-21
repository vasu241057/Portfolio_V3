// DesktopApp.tsx
import React, { useEffect, useState } from "react";
import Layout from "./Components2/Layout";
import MainContent from "./Components2/MainContent";

const DesktopApp: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout isVisible={showContent}>
      <MainContent isVisible={showContent} />
    </Layout>
  );
};

export default DesktopApp;
