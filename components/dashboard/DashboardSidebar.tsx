"use client";

import { Variable } from "@/app/dashboard/page";

const VARIABLES: { key: Variable; label: string; color: string }[] = [
  { key: "rain",  label: "Rainfall",  color: "#4AADDB" },
  { key: "tmax",  label: "Max Temp",  color: "#F59E0B" },
  { key: "tmin",  label: "Min Temp",  color: "#60A5FA" },
];

interface Props {
  variable: Variable;
  setVariable: (v: Variable) => void;
  rainfallDelta: number;
  setRainfallDelta: (v: number) => void;
  tempDelta: number;
  setTempDelta: (v: number) => void;
}

export default function DashboardSidebar({
  variable, setVariable,
  rainfallDelta, setRainfallDelta,
  tempDelta, setTempDelta,
}: Props) {
  return (
    <div className="h-full bg-[#0D1B2A] border-r border-primary-accent/15 flex flex-col gap-6 px-3 py-5 max-lg:items-center max-lg:px-2">

      <div className="w-full">
        <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-primary-accent mb-2 max-lg:hidden">
          Variable
        </p>
        <div className="flex flex-col gap-1">
          {VARIABLES.map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setVariable(key)}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-sm text-left transition-all duration-200 border max-lg:justify-center max-lg:px-2
                ${variable === key
                  ? "bg-primary-accent/15 border-primary-accent/40 text-secondary-accent"
                  : "border-transparent text-muted-text hover:bg-[#1E3448] hover:text-secondary-text"
                }`}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-sm max-lg:hidden">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-primary-accent/10" />

      <div className="w-full max-lg:hidden">
        <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-primary-accent mb-3">
          What-If Scenario
        </p>
        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-secondary-text">Rainfall Δ</span>
              <span className="font-mono text-[10px] text-secondary-accent">
                {rainfallDelta >= 0 ? "+" : ""}{rainfallDelta} mm
              </span>
            </div>
            <input
              type="range" min={-50} max={50} value={rainfallDelta}
              onChange={(e) => setRainfallDelta(Number(e.target.value))}
              className="w-full h-[3px] appearance-none bg-[#1E3448] rounded-full outline-none cursor-pointer accent-secondary-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-secondary-text">Temperature Δ</span>
              <span className="font-mono text-[10px] text-secondary-accent">
                {tempDelta >= 0 ? "+" : ""}{tempDelta} °C
              </span>
            </div>
            <input
              type="range" min={-10} max={10} value={tempDelta}
              onChange={(e) => setTempDelta(Number(e.target.value))}
              className="w-full h-[3px] appearance-none bg-[#1E3448] rounded-full outline-none cursor-pointer accent-secondary-accent"
            />
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col gap-1.5 mt-auto max-lg:hidden">
        <button className="w-full py-2 bg-primary-accent text-primary-bg text-sm font-medium rounded-sm hover:bg-secondary-accent transition-colors">
          Run Simulation
        </button>
        <button className="w-full py-2 bg-transparent text-muted-text border border-primary-accent/20 text-sm rounded-sm hover:border-primary-accent hover:text-secondary-accent transition-colors">
          Reset
        </button>
      </div>

    </div>
  );
}
