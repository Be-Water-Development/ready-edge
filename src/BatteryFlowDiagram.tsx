import { useState, useEffect } from "react";
import {
  Battery,
  BatteryCharging,
  BatteryChargingIcon,
  Bolt,
  Sun,
} from "lucide-react";

export const BatteryFlowDiagram = () => {
  const [data, setData] = useState({
    arrayVoltage: 147.2,
    chargePower: 841,
    dailyCharge: 3,
    batteryVoltage: 55.9,
    netBatteryCurrent: 15.0,
    dailyBatteryAh: 48.0,
    soc: 100,
    dailyLoadAh: 32.8,
    loadState: "Normal",
    flowCurrent: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        arrayVoltage: (147 + Math.random()).toFixed(2),
        chargePower: Math.floor(800 + Math.random() * 50),
        batteryVoltage: (55.5 + Math.random() * 0.5).toFixed(2),
        netBatteryCurrent: (15 + Math.random() * 1).toFixed(1),
        dailyBatteryAh: (45 + Math.random() * 5).toFixed(1),
        soc: 100,
        dailyLoadAh: (30 + Math.random() * 5).toFixed(1),
        flowCurrent: (Math.random() * 0.2).toFixed(1),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-6  ">
      <h2 className="text-xl font-bold flex gap-2">
        <Bolt className="text-orange-500 w-6 h-6" /> Battery Flow Diagram
      </h2>

      {/* Charge Summary */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-2">
          <BatteryChargingIcon className="text-blue-500 w-6 h-6" />
          <h3 className="text-md font-semibold text-gray-600">
            Charge Summary
          </h3>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Array Voltage</span> <span>{data.arrayVoltage} V</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Genstar Charge Power</span> <span>{data.chargePower} W</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Daily System Charge</span> <span>{data.dailyCharge} kWh</span>
        </div>
      </div>

      {/* Battery Summary */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-2">
          <Battery className="text-blue-500 w-6 h-6" />
          <h3 className="text-md font-semibold text-gray-600">
            Battery Summary
          </h3>
        </div>
        <div className="flex justify-between text-sm">
          <span>Battery Voltage</span> <span>{data.batteryVoltage} V</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Net Battery Current</span>{" "}
          <span>{data.netBatteryCurrent} A</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Daily Battery Net Ah</span>{" "}
          <span>{data.dailyBatteryAh} Ah</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>SoC</span> <span>{data.soc} %</span>
        </div>
      </div>

      {/* Load Summary */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-2">
          <Sun className="text-yellow-500 w-6 h-6" />
          <h3 className="text-md font-semibold text-gray-600">Load Summary</h3>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Daily Local Load (Ah)</span> <span>{data.dailyLoadAh} Ah</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Load State</span> <span>{data.loadState}</span>
        </div>
      </div>
    </div>
  );
};
