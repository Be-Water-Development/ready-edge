import { useState } from "react";
import {
  RefreshCw,
  Trash2,
  Save,
  Info,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";

export const SDCardSetting = () => {
  const [sdCardExpanded, setSdCardExpanded] = useState(true);
  const [loggedDataExpanded, setLoggedDataExpanded] = useState(true);
  const [loggerOption, setLoggerOption] = useState("internal+sd");

  const toggleSdCard = () => {
    setSdCardExpanded(!sdCardExpanded);
  };

  const toggleLoggedData = () => {
    setLoggedDataExpanded(!loggedDataExpanded);
  };

  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-4xl ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-slate-800 flex items-center">
           SD Card & Logger
          </h1>

          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 flex items-center">
              <Save className="w-4 h-4 mr-2" />
              Save
            </button>
          </div>
        </div>

        {/* SD Card Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 mb-6 overflow-hidden">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-slate-50"
            onClick={toggleSdCard}
          >
            <div className="flex items-center">
              <h2 className="text-lg font-medium text-slate-800">SD Card</h2>
              <div className="ml-2 text-slate-400">
                <Info className="w-4 h-4" />
              </div>
            </div>
            <div>
              {sdCardExpanded ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </div>
          </div>

          {sdCardExpanded && (
            <div className="p-5 border-t border-slate-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Detected
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Total Storage</span>
                    <span className="text-slate-800 font-medium">3.74 GB</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">
                      Format SD Card
                    </label>
                    <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 w-full sm:w-auto">
                      Format
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-slate-700">
                      Delete Data
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 flex items-center justify-center">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Event Log Data
                      </button>
                      <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 flex items-center justify-center">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Daily Log Data
                      </button>
                      <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 flex items-center justify-center">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Settings Files
                      </button>
                      <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 flex items-center justify-center">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Firmware Files
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Logged Data Storage Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-slate-50"
            onClick={toggleLoggedData}
          >
            <div className="flex items-center">
              <h2 className="text-lg font-medium text-slate-800">
                Logged Data Storage
              </h2>
              <div className="ml-2 text-slate-400">
                <Info className="w-4 h-4" />
              </div>
            </div>
            <div>
              {loggedDataExpanded ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </div>
          </div>

          {loggedDataExpanded && (
            <div className="p-5 border-t border-slate-100">
              <div className="mb-5">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-slate-700 flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    There are two different loggers. The Daily Logger records
                    important data once a day. The Event Logger records
                    high-speed operational, network, and system-level
                    information. Enable logging to an SD card to substantially
                    increase the maximum days of storage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loggerOption"
                    value="internal"
                    checked={loggerOption === "internal"}
                    onChange={() => setLoggerOption("internal")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-slate-700">Internal only</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loggerOption"
                    value="internal+sd"
                    checked={loggerOption === "internal+sd"}
                    onChange={() => setLoggerOption("internal+sd")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-slate-700">Internal + SD Card</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
