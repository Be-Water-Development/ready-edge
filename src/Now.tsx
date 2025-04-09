import { BatteryFlowDiagram } from "./BatteryFlowDiagram";
import { ChargeController } from "./ChargeController";
import { ErrorPanel } from "./ErrorPanel";
import { SolarArray } from "./SolarArray";

export const Now = () => {
  return (
    <div className="w-full h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* Top Left Quadrant */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
          <SolarArray />
        </div>
        
        {/* Top Right Quadrant */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
          <ChargeController />
        </div>
        
        {/* Bottom Left Quadrant */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
          <BatteryFlowDiagram />
        </div>
        
        {/* Bottom Right Quadrant */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
          <ErrorPanel />
        </div>
      </div>
    </div>
  );
};