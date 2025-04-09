import { useState } from "react";
import { WifiIcon, ServerIcon, NetworkIcon, Save } from "lucide-react";

export const  NetworkSettings = () => {
  const [dhcp, setDhcp] = useState(false);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  
  return (
    <div className="max-w-3xl   p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <NetworkIcon className="mr-3 text-primary" size={28} />
        Network Settings
      </h1>
      
      {/* Current Network */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
          <ServerIcon className="mr-2 text-primary" size={20} />
          Current Network Configuration
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">NetBIOS Name</span>
            </label>
            <input 
              type="text" 
              value="GSMPPT22070001" 
              className="input input-bordered bg-gray-50" 
              readOnly 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">MAC Address</span>
            </label>
            <input 
              type="text" 
              value="00:25:D2:D0:9B:15" 
              className="input input-bordered bg-gray-50" 
              readOnly 
            />
          </div>
          
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-4">
              <span className="label-text font-medium">DHCP</span>
              <input 
                type="checkbox" 
                className="toggle toggle-primary" 
                checked={dhcp} 
                onChange={() => setDhcp(!dhcp)} 
              />
            </label>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">IP Address</span>
            </label>
            <input 
              type="text" 
              defaultValue="192.168.1.47" 
              className="input input-bordered" 
              disabled={dhcp} 
            />
          </div>
        </div>
      </div>
      
      {/* Wireless */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
          <WifiIcon className="mr-2 text-primary" size={20} />
          Wireless Connection
        </h2>
        
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <span className="label-text font-medium">Enable Wireless</span>
            <input 
              type="checkbox" 
              className="toggle toggle-primary" 
              checked={wifiEnabled} 
              onChange={() => setWifiEnabled(!wifiEnabled)} 
            />
          </label>
        </div>
        
        {wifiEnabled && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-700">Wireless is enabled. Connected to network.</p>
          </div>
        )}
      </div>
      
      {/* Modbus */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-medium text-gray-700 mb-4 flex items-center">
          <ServerIcon className="mr-2 text-primary" size={20} />
          Modbus Configuration
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Modbus ID</span>
            </label>
            <input 
              type="text" 
              defaultValue="1" 
              className="input input-bordered" 
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Modbus IP Port</span>
            </label>
            <input 
              type="text" 
              defaultValue="502" 
              className="input input-bordered" 
            />
          </div>
        </div>
      </div>
      
      <button className="btn btn-primary w-full flex items-center justify-center gap-2">
        <Save size={18} />
        Save Configuration
      </button>
    </div>
  );
}