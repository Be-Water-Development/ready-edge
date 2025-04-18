import React, { useState, useEffect } from "react";

const getRandomValue = (min, max, decimals = 2) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

export const SolarArray = () => {

  const [xavyrVoltage, setXavyrVoltage] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/fetch-data');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setXavyrVoltage(result.data); // Assuming `data` is the key in the JSON response
        console.log('Success:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [data, setData] = useState({
    arrayCurrent: 5.6,
    arrayVoltage: xavyrVoltage,
    genStarChargeCurrent: 15.1,
    genStarChargeAh: 36.0,
    genStarChargePower: 841,
    sweepVoc: 148.46,
    sweepVmp: 111.24,
    sweepPmax: 0,
  });
console.log({xavyrVoltage})
  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        arrayCurrent: getRandomValue(4, 7),
        arrayVoltage: xavyrVoltage,
        genStarChargeCurrent: getRandomValue(10, 20),
        genStarChargeAh: getRandomValue(30, 40),
        genStarChargePower: getRandomValue(800, 900, 0),
        sweepVoc: getRandomValue(145, 150),
        sweepVmp: getRandomValue(100, 120),
        sweepPmax: getRandomValue(0, 50, 0),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4   bg-white">
      <div className="flex items-center border-b pb-2 mb-4">
        <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-2">
          🌟
        </div>
        <h2 className="text-xl font-bold">Array</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Array Current</p>
          <p className="text-lg font-bold">{data.arrayCurrent} A</p>
        </div>
        <div>
          <p className="text-gray-600">Array Voltage</p>
          <p className="text-lg font-bold">{xavyrVoltage && xavyrVoltage.split('=')[1].split('e')[0]} V</p>
        </div>
        <div>
          <p className="text-gray-600">GenStar Charge Current</p>
          <p className="text-lg font-bold">{data.genStarChargeCurrent} A</p>
        </div>
        <div>
          <p className="text-gray-600">Sweep Voc</p>
          <p className="text-lg font-bold">{data.sweepVoc} V</p>
        </div>
        <div>
          <p className="text-gray-600">GenStar Charge Ah</p>
          <p className="text-lg font-bold">{data.genStarChargeAh} Ah</p>
        </div>
        <div>
          <p className="text-gray-600">Sweep Vmp</p>
          <p className="text-lg font-bold">{data.sweepVmp} V</p>
        </div>
        <div>
          <p className="text-gray-600">GenStar Charge Power</p>
          <p className="text-lg font-bold">{data.genStarChargePower} W</p>
        </div>
        <div>
          <p className="text-gray-600">Sweep Pmax</p>
          <p className="text-lg font-bold">{data.sweepPmax} W</p>
        </div>
      </div>
    </div>
  );
};
