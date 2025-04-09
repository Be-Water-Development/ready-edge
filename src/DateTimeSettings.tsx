import { useState } from "react";

export const DateTimeSettings = () => {
  const [useInternalClock, setUseInternalClock] = useState(false);
  const [utcTime, setUtcTime] = useState("16:40");
  const [utcDate, setUtcDate] = useState("12/30/2022");
  const [offset, setOffset] = useState("+10:30");

  return (
    <div className="max-w-lg p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Date & Time</h2>
      
      {/* Local Time Offset */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Local Time Offset</label>
        <select 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={offset} 
          onChange={(e) => setOffset(e.target.value)}
        >
          <option value="+10:30">+10:30</option>
          <option value="+09:00">+09:00</option>
          <option value="+08:00">+08:00</option>
          <option value="+07:00">+07:00</option>
        </select>
      </div>
      
      {/* Date/Time Source */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date/Time Source</label>
        <div className="flex items-center mt-2">
          <input 
            type="checkbox" 
            checked={useInternalClock} 
            onChange={() => setUseInternalClock(!useInternalClock)} 
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2">{useInternalClock ? "Use Internal Clock" : "Use Time Server(s)"}</span>
        </div>
      </div>
      
      {/* UTC Time & Date */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Current UTC Time</label>
          <input 
            type="text" 
            value={utcTime} 
            onChange={(e) => setUtcTime(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Current UTC Date</label>
          <input 
            type="text" 
            value={utcDate} 
            onChange={(e) => setUtcDate(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      {/* Save Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Save</button>
    </div>
  );
}
