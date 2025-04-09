import { useState } from "react";

export const History = () => {
  const [activeTab, setActiveTab] = useState("Daily Records");
  
  const tabs = ["Graphs", "Daily Records", "Event Log", "Counters"];
  
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
        {activeTab === "Graphs" && <div>Graphs content goes here</div>}
        {activeTab === "Daily Records" && <div>Daily Records content goes here</div>}
        {activeTab === "Event Log" && <div>Event Log content goes here</div>}
        {activeTab === "Counters" && <div>Counters content goes here</div>}
      </div>
    </div>
  );
};