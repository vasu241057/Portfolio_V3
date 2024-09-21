import { useState } from "react";

interface TabsComponentProps {
  onTabChange: (tab: string) => void; // new prop to notify parent component
}

const TabsComponent: React.FC<TabsComponentProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab); // call the parent function on tab change
  };

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your tab
        </label>
        <select
          id="tabs"
          className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
          onChange={(e) => handleTabClick(e.target.value)}
          value={activeTab}
        >
          <option value="Profile">Profile</option>
          <option value="Dashboard">Dashboard</option>
          <option value="Settings">Settings</option>
        </select>
      </div>

      {/* Desktop View */}
      <ul className="hidden text-sm font-medium text-center text-black rounded-lg shadow sm:flex bg-gray-100">
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => handleTabClick("Profile")}
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-s-lg hover:bg-gray-50 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Profile" ? "bg-gray-200" : ""
            }`}
          >
            Projects
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => handleTabClick("Work-Experience")}
            className={`inline-block w-full p-4 border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Work-Experience" ? "bg-gray-200" : ""
            }`}
          >
            Work-Experience
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => handleTabClick("Skills")}
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Skills" ? "bg-gray-200" : ""
            }`}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabsComponent;
