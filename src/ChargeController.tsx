import React, { useState, useEffect } from "react";

const getRandomValue = (min, max, decimals = 2) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

const getRandomState = (states) => {
  return states[Math.floor(Math.random() * states.length)];
};

export const ChargeController = () => {
  const [data, setData] = useState({
    chargeState: "Absorption",
    loadState: "Normal",
    genStarLoadCurrent: 23.4,
    heatsinkTemperature: 28.3,
    batteryVoltage: 55.73,
    netBatteryCurrent: 15.0,
    targetRegulation: 55.81,
    batteryTemperature: 20.0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        chargeState: getRandomState(["Absorption", "Float", "Bulk", "Equalization"]),
        loadState: getRandomState(["Normal", "Overload", "Idle"]),
        genStarLoadCurrent: getRandomValue(20, 30),
        heatsinkTemperature: getRandomValue(25, 35),
        batteryVoltage: getRandomValue(50, 60),
        netBatteryCurrent: getRandomValue(-10, 20),
        targetRegulation: getRandomValue(50, 60),
        batteryTemperature: getRandomValue(15, 25),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white">
      <div className="flex items-center border-b pb-2 mb-4">
        <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-2">
          ⚡
        </div>
        <h2 className="text-xl font-bold">Charge Controller</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Charge State</p>
          <p className="text-lg font-bold">{data.chargeState}</p>
        </div>
        <div>
          <p className="text-gray-600">Battery Voltage</p>
          <p className="text-lg font-bold">{data.batteryVoltage} V</p>
        </div>
        <div>
          <p className="text-gray-600">Load State</p>
          <p className="text-lg font-bold">{data.loadState}</p>
        </div>
        <div>
          <p className="text-gray-600">Net Battery Current</p>
          <p className="text-lg font-bold">{data.netBatteryCurrent} A</p>
        </div>
        <div>
          <p className="text-gray-600">GenStar Load Current</p>
          <p className="text-lg font-bold">{data.genStarLoadCurrent} A</p>
        </div>
        <div>
          <p className="text-gray-600">Target Regulation</p>
          <p className="text-lg font-bold">{data.targetRegulation} V</p>
        </div>
        <div>
          <p className="text-gray-600">Heatsink Temperature</p>
          <p className="text-lg font-bold">{data.heatsinkTemperature} ℃</p>
        </div>
        <div>
          <p className="text-gray-600">Battery Temperature</p>
          <p className="text-lg font-bold">{data.batteryTemperature} ℃</p>
        </div>
      </div>
    </div>
  );
};

