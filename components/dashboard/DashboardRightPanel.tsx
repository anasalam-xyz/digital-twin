import { Variable } from "@/app/dashboard/page";

const MOCK = {
  actual: { rain: 18.5, tmax: 32.8, tmin: 24.1 },
  predicted: { rain: 17.2, tmax: 33.4, tmin: 23.8 },
  history: [30, 55, 40, 80, 65, 90, 45],
};

const UNITS: Record<Variable, string> = {
  rain: "mm/day",
  tmax: "°C",
  tmin: "°C",
};

interface Props {
  selectedPoint: { lat: number; lon: number } | null;
  variable: Variable;
  date: string;
  rainfallDelta: number;
  tempDelta: number;
}

export default function DashboardRightPanel({
  selectedPoint, variable, date, rainfallDelta, tempDelta,
}: Props) {
  const actual = MOCK.actual[variable];
  const predicted = MOCK.predicted[variable];
  const delta = (predicted - actual).toFixed(1);
  const pctError = Math.abs(((predicted - actual) / actual) * 100).toFixed(0);
  const unit = UNITS[variable];

  return (
    <div className="bg-[#1A2E42] border-l border-primary-accent/15 flex flex-col gap-3 px-3 py-4 overflow-y-auto
      max-lg:col-span-full max-lg:border-l-0 max-lg:border-t max-lg:flex-row max-lg:overflow-x-auto max-lg:py-3">

      <div className="bg-[#1E3448] border border-primary-accent/15 rounded-sm p-3 flex-shrink-0 max-lg:min-w-[200px]">
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-primary-accent mb-2">
          Selected Point
        </p>
        {selectedPoint ? (
          <>
            {[
              ["Latitude",  `${selectedPoint.lat}°N`],
              ["Longitude", `${selectedPoint.lon}°E`],
              ["Date",      date],
              ["Region",    "Delhi NCR"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between items-center py-1.5 border-b border-primary-accent/8 last:border-0">
                <span className="text-xs text-muted-text font-light">{k}</span>
                <span className="font-mono text-xs text-secondary-text">{v}</span>
              </div>
            ))}
          </>
        ) : (
          <p className="text-xs text-muted-text font-light">Click a point on the map</p>
        )}
      </div>

      <div className="bg-[#1E3448] border border-primary-accent/15 rounded-sm p-3 flex-shrink-0 max-lg:min-w-[220px]">
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-primary-accent mb-3">
          Predicted vs Actual
        </p>
        <div className="grid grid-cols-[1fr_1px_1fr] gap-3 items-center">
          <div className="text-center">
            <p className="font-mono text-[8px] tracking-[0.12em] uppercase text-muted-text mb-1">Actual</p>
            <p className="font-display text-2xl font-semibold text-primary-text">{actual}</p>
            <p className="font-mono text-[9px] text-muted-text mt-0.5">{unit}</p>
          </div>
          <div className="h-full w-px bg-primary-accent/15" />
          <div className="text-center">
            <p className="font-mono text-[8px] tracking-[0.12em] uppercase text-muted-text mb-1">Predicted</p>
            <p className="font-display text-2xl font-semibold text-secondary-accent">{predicted}</p>
            <p className="font-mono text-[9px] text-muted-text mt-0.5">{unit}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-3 font-mono text-[9px] text-green-400">
          <span>{Number(delta) >= 0 ? "▲" : "▼"} {delta} {unit}</span>
          <span className="text-muted-text">·</span>
          <span>{pctError}% error</span>
        </div>
      </div>

      <div className="bg-[#1E3448] border border-primary-accent/15 rounded-sm p-3 flex-shrink-0 max-lg:min-w-[180px]">
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-primary-accent mb-2">
          7-Day History
        </p>
        <div className="flex items-end gap-1 h-12">
          {MOCK.history.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-sm transition-opacity duration-200 hover:opacity-100
                ${i === MOCK.history.length - 2
                  ? "bg-secondary-accent opacity-100"
                  : "bg-primary-accent opacity-60"
                }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#1E3448] border border-primary-accent/15 rounded-sm p-3 flex-shrink-0 max-lg:min-w-[200px]">
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-primary-accent mb-2">
          Scenario Output
        </p>
        {[
          ["Rainfall Δ",    `${rainfallDelta >= 0 ? "+" : ""}${rainfallDelta} mm`, rainfallDelta !== 0 ? "text-amber-400" : "text-muted-text"],
          ["Temp Δ",        `${tempDelta >= 0 ? "+" : ""}${tempDelta} °C`,         tempDelta !== 0 ? "text-amber-400" : "text-muted-text"],
          ["Pred. Rain",    "17.2 mm",  "text-secondary-text"],
          ["Pred. Tmax",    "32.8 °C",  "text-secondary-text"],
          ["Status",        rainfallDelta === 0 && tempDelta === 0 ? "Baseline" : "Run simulation", "text-muted-text"],
        ].map(([k, v, cls]) => (
          <div key={k} className="flex justify-between items-center py-1.5 border-b border-primary-accent/8 last:border-0">
            <span className="text-xs text-muted-text font-light">{k}</span>
            <span className={`font-mono text-xs ${cls}`}>{v}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
