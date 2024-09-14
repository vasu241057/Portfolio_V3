import { useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
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
          className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Profile" ? "bg-gray-200" : ""
            }`}
          >
            Profile
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => handleTabClick("Dashboard")}
            className={`inline-block w-full p-4 border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Dashboard" ? "bg-gray-200" : ""
            }`}
          >
            Dashboard
          </a>
        </li>
        <li className="w-full focus-within:z-10">
          <a
            href="#"
            onClick={() => handleTabClick("Settings")}
            className={`inline-block w-full p-4 border-r border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-transform duration-300 ease-in-out ${
              activeTab === "Settings" ? "bg-gray-200" : ""
            }`}
          >
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabsComponent;
