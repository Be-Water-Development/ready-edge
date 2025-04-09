import React, { useState, useEffect } from "react";

export const ErrorPanel = () => {
  const [errorCounts, setErrorCounts] = useState({
    faults: 0,
    alarms: 0,
    faultsToday: 0,
    alarmsToday: 0
  });

  // Simulate random error states for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setErrorCounts({
        faults: Math.floor(Math.random() * 2),
        alarms: Math.floor(Math.random() * 2),
        faultsToday: Math.floor(Math.random() * 2),
        alarmsToday: Math.floor(Math.random() * 2),
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto bg-white overflow-hidden ">
      <div className="bg-gradient-to-r p-5 flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3 shadow-md">
          <span className="text-white text-xl">!</span>
        </div>
        <h2 className="text-2xl font-semibold ">System Status</h2>
      </div>
      
      <div className="p-4 space-y-3">
        {[
          { label: "Faults", count: errorCounts.faults, highlight: false },
          { label: "Alarms", count: errorCounts.alarms, highlight: true },
          { label: "Faults Today", count: errorCounts.faultsToday, highlight: false },
          { label: "Alarms Today", count: errorCounts.alarmsToday, highlight: false }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center p-3 rounded-lg transition-all duration-200 ${
              item.highlight 
                ? "bg-orange-50 border-l-4 border-orange-400" 
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-medium text-gray-700">{item.label}</h3>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
              item.count > 0 
                ? "bg-gradient-to-br from-red-500 to-red-600 text-white" 
                : "bg-gradient-to-br from-green-500 to-green-600 text-white"
            }`}>
              {item.count}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-3 text-xs text-gray-500 text-right">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

