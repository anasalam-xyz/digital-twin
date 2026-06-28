"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import DashboardRightPanel from "@/components/dashboard/DashboardRightPanel";
import DashboardTimebar from "@/components/dashboard/DashboardTimebar";

// Map must be dynamically imported ( Leaflet uses window)
const ClimateMap = dynamic(() => import("@/components/dashboard/ClimateMap"), { ssr: false });

export type Variable = "rain" | "tmax" | "tmin";

export default function DashboardPage() {
  const [variable, setVariable] = useState<Variable>("rain");
  const [date, setDate] = useState("2021-07-15");
  const [rainfallDelta, setRainfallDelta] = useState(0);
  const [tempDelta, setTempDelta] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState<{ lat: number; lon: number } | null>(null);

  return (
    <div className="h-screen overflow-hidden grid grid-cols-[220px_1fr_280px] grid-rows-[48px_1fr_72px] max-lg:grid-cols-[48px_1fr] max-lg:grid-rows-[48px_1fr_auto_72px]">

      <DashboardTopbar date={date} />

      <DashboardSidebar
        variable={variable}
        setVariable={setVariable}
        rainfallDelta={rainfallDelta}
        setRainfallDelta={setRainfallDelta}
        tempDelta={tempDelta}
        setTempDelta={setTempDelta}
      />

      <div className="bg-[#111F2E] relative overflow-hidden">
        <ClimateMap
          variable={variable}
          date={date}
          onPointSelect={setSelectedPoint}
        />
      </div>

      <DashboardRightPanel
        selectedPoint={selectedPoint}
        variable={variable}
        date={date}
        rainfallDelta={rainfallDelta}
        tempDelta={tempDelta}
      />

      <DashboardTimebar date={date} setDate={setDate} />

    </div>
  );
}
