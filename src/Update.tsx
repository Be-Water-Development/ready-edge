import { useState } from 'react';
import { AlertTriangle, Upload, CheckCircle, RefreshCw } from 'lucide-react';

export const Update = () => {
  const [file, setFile] = useState(null);
  const [autoReboot, setAutoReboot] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadStatus(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setUploadStatus(null);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadStatus('success');
    }, 2000);
  };

  return (
    <div className="w-full mx-auto p-6 m-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Update Firmware</h1>
      
      {/* Warning Card */}
      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center gap-2 text-amber-700 mb-3">
          <AlertTriangle size={20} />
          <h2 className="font-bold text-lg">Important Information</h2>
        </div>
        
        <div className="ml-7 space-y-2 text-amber-700">
          <p className="flex items-start gap-2">
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500 mt-2" />
            The system will reboot after a firmware update by default.
          </p>
          <p className="flex items-start gap-2">
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500 mt-2" />
            The system will lose power during a reboot.
          </p>
          <p className="flex items-start gap-2">
            <span className="inline-block w-1 h-1 rounded-full bg-amber-500 mt-2" />
            The Control may fail to properly reboot after a firmware update 
            leaving the system offline and without power.
          </p>
        </div>
      </div>
      
      {/* Auto-reboot Option */}
      <div className="flex items-center mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={autoReboot}
            onChange={() => setAutoReboot(!autoReboot)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">
            Auto-reboot after firmware update 
            <span className="text-gray-500 text-sm ml-1">
              (Manual power cycle required if disabled)
            </span>
          </span>
        </label>
      </div>
      
      {/* File Upload Area */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('firmware-file').click()}
      >
        <input
          id="firmware-file"
          type="file"
          accept=".bin,.fw,.update"
          className="hidden"
          onChange={handleFileChange}
        />
        
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
        
        {!file ? (
          <div>
            <p className="text-lg font-medium text-gray-700">
              Drag and drop firmware file or click to browse
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Supported formats: .bin, .fw, .update
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 p-3 rounded-lg inline-block">
            <p className="text-gray-700 font-medium text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </div>
      
      {/* Status and Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {uploadStatus === 'success' && (
          <div className="flex items-center text-green-600 mb-3 sm:mb-0">
            <CheckCircle size={18} className="mr-2" />
            <span>Firmware successfully uploaded</span>
          </div>
        )}
        
        {!uploadStatus && (
          <div className="text-sm text-gray-500 mb-3 sm:mb-0">
            Select a firmware file to update your device
          </div>
        )}
        
        <div className="flex gap-3">
          <button
            className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            onClick={() => {
              setFile(null);
              setUploadStatus(null);
            }}
          >
            Reset
          </button>
          
          <button
            className={`px-5 py-2 rounded-lg flex items-center gap-2 ${
              file && !isUploading
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!file || isUploading}
            onClick={handleUpload}
          >
            {isUploading ? (
              <>
                <RefreshCw size={18} className="animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload size={18} />
                Upload Firmware
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}