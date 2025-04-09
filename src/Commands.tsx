import React, { useState } from 'react';
import { Info, Power, RefreshCw, Battery, ToggleLeft, Settings } from 'lucide-react';

export const Commands = () => {
  const [batteryCharging, setBatteryCharging] = useState(true);
  const [relayBActive, setRelayBActive] = useState(false);
  
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <Settings size={16} />
            <span>Arrange</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Load Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Load</h2>
              <Info size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">System-wide load output</div>
                <button className="bg-white text-red-500 border border-red-200 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                  Disconnect
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">LVD Override (20 min)</div>
                <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  GO
                </button>
              </div>
            </div>
          </div>
          
          {/* Loads Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Loads</h2>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <span className="text-sm text-gray-600">Program {num}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                      TEST
                    </button>
                    <button className="bg-white text-red-500 border border-red-200 px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                      DISCONNECT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Counters Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Counters</h2>
              <Info size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">All Resettable Counters</div>
                <button className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  CLEAR
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">All Total Counters</div>
                <button className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  CLEAR
                </button>
              </div>
            </div>
          </div>
          
          {/* Charger Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Charger</h2>
              <Info size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Battery className="text-green-500" size={20} />
                  <div className="text-sm text-gray-600">Battery Charging</div>
                </div>
                <button 
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${batteryCharging ? 'bg-white text-red-500 border border-red-200 hover:bg-red-50' : 'bg-green-500 text-white hover:bg-green-600'} transition-colors`}
                  onClick={() => setBatteryCharging(!batteryCharging)}
                >
                  {batteryCharging ? 'DISABLE' : 'ENABLE'}
                </button>
              </div>
            </div>
          </div>
          
          {/* System Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">System</h2>
              <Info size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RefreshCw size={16} className="text-gray-500" />
                  <div className="text-sm text-gray-600">Reboot Control</div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  GO
                </button>
              </div>
            </div>
          </div>
          
          {/* ESC Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">ESC</h2>
              <Info size={16} className="text-gray-400" />
            </div>
          </div>
          
          {/* ReadyBlocks Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">ReadyBlocks</h2>
              <Info size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3 pb-2 border-b border-orange-200">Position 2</h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Relay B (RAN-01)</div>
                <input type="checkbox" defaultChecked className="toggle" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}