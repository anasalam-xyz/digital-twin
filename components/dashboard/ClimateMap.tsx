"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Variable } from "@/app/dashboard/page";

// Color scales for variable
const RAIN_COLORS  = ["#1A3A5C", "#2A7FAF", "#4AADDB", "#FFFFFF"];
const TMAX_COLORS  = ["#2A7FAF", "#4AADDB", "#F59E0B", "#EF4444"];
const TMIN_COLORS  = ["#1E3A8A", "#2A7FAF", "#4AADDB", "#DAEAF5"];

function getColor(value: number, min: number, max: number, colors: string[]) {
  const t = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const idx = t * (colors.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return colors[lo];
  return colors[lo]; 
}

function generateMockGrid(variable: Variable) {
  const points = [];
  // Delhi NCR bounds: lat 28-29.5, lon 76.5-78
  for (let lat = 28.0; lat <= 29.5; lat += 0.25) {
    for (let lon = 76.5; lon <= 78.0; lon += 0.25) {
      const value = variable === "rain"
        ? Math.random() * 80
        : variable === "tmax"
        ? 28 + Math.random() * 10
        : 18 + Math.random() * 8;
      points.push({ lat, lon, value });
    }
  }
  return points;
}

function GridLayer({ variable, onPointSelect }: {
  variable: Variable;
  onPointSelect: (p: { lat: number; lon: number }) => void;
}) {
  const map = useMap();

  useEffect(() => {
    const L = require("leaflet");
    const grid = generateMockGrid(variable);
    const colors = variable === "rain" ? RAIN_COLORS : variable === "tmax" ? TMAX_COLORS : TMIN_COLORS;
    const min = variable === "rain" ? 0 : variable === "tmax" ? 28 : 18;
    const max = variable === "rain" ? 80 : variable === "tmax" ? 38 : 26;

    const layers: any[] = [];

    grid.forEach(({ lat, lon, value }) => {
      const color = getColor(value, min, max, colors);
      const rect = L.rectangle(
        [[lat, lon], [lat + 0.25, lon + 0.25]],
        {
          color: "transparent",
          fillColor: color,
          fillOpacity: 0.55,
          weight: 0,
        }
      );
      rect.on("click", () => onPointSelect({ lat, lon }));
      rect.on("mouseover", () => rect.setStyle({ fillOpacity: 0.85 }));
      rect.on("mouseout",  () => rect.setStyle({ fillOpacity: 0.55 }));
      rect.addTo(map);
      layers.push(rect);
    });

    return () => { layers.forEach(l => map.removeLayer(l)); };
  }, [variable, map, onPointSelect]);

  return null;
}

interface Props {
  variable: Variable;
  date: string;
  onPointSelect: (p: { lat: number; lon: number }) => void;
}

export default function ClimateMap({ variable, date, onPointSelect }: Props) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // India center
      zoom={5}
      style={{ height: "100%", width: "100%", background: "#111F2E" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <GridLayer variable={variable} onPointSelect={onPointSelect} />
    </MapContainer>
  );
}
