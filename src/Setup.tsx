import { useState } from "react";

export const Setup = () => {
  const [activeTab, setActiveTab] = useState("Date & Time");
  
  const tabs = ["Date & Time", "Network", "SD Card & Logger", "Schedule", "Meter Display", "Save & Load"];
  
  return (
    <div className="p-4">
      <div role="tablist" className="tabs tabs-lift">
        {tabs.map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>
      
      <div className="mt-4">
        {activeTab === "Date & Time" && <div>Date & Time content goes here</div>}
        {activeTab === "Network" && <div>Network content goes here</div>}
        {activeTab === "SD Card & Logger" && <div>SD Card & Logger content goes here</div>}
        {activeTab === "Schedule" && <div>Schedule content goes here</div>}
        {activeTab === "Meter Display" && <div>Meter Display content goes here</div>}
        {activeTab === "Save & Load" && <div>Save & Load content goes here</div>}
      </div>
    </div>
  );
};
