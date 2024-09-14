import { useEffect, useState } from "react";
import Layout from "./Components/Layout";
import MainContent from "./Components/MainContent";

function App() {
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
}

export default App;
