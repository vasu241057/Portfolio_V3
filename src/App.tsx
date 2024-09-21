// App.tsx
import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./MobileApp";
import DesktopApp from "./DesktopApp";

const App: React.FC = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1210 });

  return isMobileOrTablet ? <MobileApp /> : <DesktopApp />;
};

export default App;
