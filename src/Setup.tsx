import { useState } from "react";
import { DateTimeSettings } from "./DateTimeSettings";
import { NetworkSettings } from "./NetworkSettings";
import { SDCardSetting } from "./SDCardSettings";

export const Setup = () => {
  const [activeTab, setActiveTab] = useState("Date & Time");

  const tabs = [
    "Date & Time",
    "Network",
    "SD Card & Logger",
    "Schedule",
    "Meter Display",
    "Save & Load",
  ];

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
        {activeTab === "Date & Time" && (
          <div>
            <DateTimeSettings />
          </div>
        )}
        {activeTab === "Network" && <div><NetworkSettings /></div>}
        {activeTab === "SD Card & Logger" && (
          <div><SDCardSetting /></div>
        )}
        {activeTab === "Schedule" && <div>Schedule content goes here</div>}
        {activeTab === "Meter Display" && (
          <div>Meter Display content goes here</div>
        )}
        {activeTab === "Save & Load" && (
          <div>Save & Load content goes here</div>
        )}
      </div>
    </div>
  );
};
