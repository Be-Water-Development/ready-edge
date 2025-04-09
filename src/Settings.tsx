import React from 'react';

export const  Settings = () => {
  const sections = [
    {
      id: 'ids',
      title: 'IDs & Versions',
      items: [
        { label: 'Firmware Version', value: '5624fd5be4b9' },
        { label: 'Hardware Version', value: '1.0' },
        { label: 'Serial Number', value: '2202000' },
        { label: 'Product Hash', value: '8d22000e0' },
        { label: 'License Expiry', value: '2026-09-04' },
      ]
    },
    {
      id: 'modes',
      title: 'Modes & Profiles',
      items: [
        { label: 'Operating Mode', value: 'Standalone' },
        { label: 'ESC Mode', value: 'Disabled' },
        { label: 'LVE/LVR Profile', value: '48.0V / 52.0V' },
        { label: 'Battery Type', value: 'Discover' },
        { label: 'Battery Manufacturer', value: 'Discover' },
        { label: 'Battery Model', value: 'Discover AES' },
      ]
    },
    {
      id: 'datetime',
      title: 'Date & Time',
      items: [
        { label: 'Date & Time', value: '2022-12-13 12:40' },
        { label: 'Local time offset', value: '-0:00' },
        { label: 'Date/Time Source', value: 'server' },
      ]
    },
    {
      id: 'charger',
      title: 'Charger',
      items: [
        { label: 'Solar Input Mode', value: 'MPPT' },
        { label: 'Battery Size', value: '200.0 Ah' },
        { label: 'Battery SOC Efficiency', value: '94 %' },
        { label: 'Battery Charged Voltage', value: '58.0 Volts' },
        { label: 'Battery Current Limit Requires Shunt', value: 'N/A' },
        { label: 'Absorption Voltage', value: '0.00 V' },
        { label: 'Absorption Time', value: '00:00 hrs/min' },
        { label: 'Float Voltage', value: 'Disabled' },
        { label: 'Float Time', value: 'Disabled' },
        { label: 'Equalization Time', value: 'Disabled' },
        { label: 'Equalization Voltage', value: 'Disabled' },
        { label: 'Charging Alert', value: 'Enabled' },
        { label: 'STC Warning', value: 'Enabled' },
        { label: 'SOC Available', value: 'Yes' },
      ]
    },
    {
      id: 'load',
      title: 'Load',
      items: [
        { label: 'Low Voltage Disconnect', value: '48.00 V' },
        { label: 'Low Voltage Reconnect', value: '52.00 V' },
        { label: 'Load Compensation', value: '24 mV/A' },
        { label: 'Critical Load Warning Time', value: '30 min' },
        { label: 'External HVD', value: 'Disabled' },
        { label: 'Terminal HVD', value: 'Disabled' },
        { label: 'Low SOC Disconnect', value: '–' },
        { label: 'Low SOC Reconnect', value: '–' },
      ]
    },
    {
      id: 'readyblocks',
      title: 'ReadyBlocks',
      items: [
        { label: 'Position 1', value: 'ReadyBlock' },
        { label: 'Position 2', value: 'ReadyShunt' },
        { label: 'Position 3', value: 'ReadyBMS' },
        { label: 'Position 4', value: 'ReadyBMS' },
      ]
    },
    {
      id: 'esc',
      title: 'ESC Timing Controls',
      items: [
        { label: 'Primary Generator Max Run Time', value: '00:01:00' },
        { label: 'Primary Generator Min Run Time', value: 'Disabled' },
        { label: 'Primary Generator Min Off Time', value: '00:03:00' },
      ]
    },
    {
      id: 'network',
      title: 'Network',
      items: [
        { label: 'MODBUS Comms', value: 'CSMPTT2202001' },
        { label: 'MAC address', value: '00:25:32:02:08:15' },
        { label: 'DHCP/Static IP', value: 'Static IP' },
        { label: 'IP address', value: '192.168.0.110' },
        { label: 'Subnet mask', value: '255.255.255.0' },
        { label: 'Default gateway', value: '192.168.0.1' },
        { label: 'Primary DNS', value: '8.8.8.8' },
        { label: 'Secondary DNS', value: '209.244.0.3' },
        { label: 'HTTP port', value: '80' },
        { label: 'Ethernet green mode', value: 'Disabled' },
        { label: 'Find MODBUS MPPTs', value: 'Enabled' },
        { label: 'MODBUS IP', value: '1' },
        { label: 'MODBUS IP port', value: '502' },
        { label: 'Bridge Ethernet Modbus Requests', value: 'Disabled' },
        { label: 'Enable Wireless', value: 'Enabled' },
        { label: 'Time Server 1', value: '0.pool.ntp.org' },
        { label: 'Time Server 2', value: '1.pool.ntp.org' },
        { label: 'Time Server 3', value: '2.pool.ntp.org' },
        { label: 'SNMP Read Community', value: 'public' },
        { label: 'SNMP Write Community', value: 'private' },
      ]
    },
    {
      id: 'display',
      title: 'Meter Display',
      items: [
        { label: 'Language', value: 'English (en)' },
        { label: 'Screensaver', value: 'Enabled' },
        { label: 'Backlight Timer', value: '60 sec' },
        { label: 'Screen & LED Brightness', value: '50%' },
        { label: 'Screen Contrast', value: '70%' },
        { label: 'Auto Scroll Timer', value: 'Disabled' },
        { label: 'Auto Return to Main Display', value: 'Enabled' },
        { label: 'Momentary Press', value: 'None' },
        { label: 'Press & Hold', value: 'None' },
      ]
    },
  ];

  // Function to render a section of settings
  const renderSection = (section) => (
    <div key={section.id} className="mb-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className=" px-6 py-4 ">
          <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {section.items.map((item, index) => (
              <div key={index} className="py-3 border-b border-gray-100 flex justify-between items-center">
                <span className="text-gray-600">{item.label}</span>
                <span className="text-gray-900 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        </header>
        
        <div className="space-y-6">
          {sections.map(renderSection)}
        </div>
      </div>
    </div>
  );
}