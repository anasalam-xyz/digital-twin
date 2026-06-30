const STEPS = [
  {
    number: "01",
    tag: "Data Ingestion",
    title: ["Pulling Raw Climate", "Records"],
    description: (
      <>
        IMD gridded datasets are fetched directly using <strong className="text-secondary-text font-normal">imdlib</strong> — a
        Python library that downloads binary <strong className="text-secondary-text font-normal">.GRD files</strong> for
        rainfall, max temperature, and min temperature. Each file encodes a 3D grid of
        [time, latitude, longitude] at daily resolution, covering all of India from 2012 to 2025.
      </>
    ),
    pills: ["imdlib", ".GRD Binary", "Historical Data"],
  },
  {
    number: "02",
    tag: "Preprocessing",
    title: ["Cleaning &", "Structuring"],
    description: (
      <>
        Raw binary files are parsed into <strong className="text-secondary-text font-normal">xarray Datasets</strong> with
        named coordinates. Missing values flagged as <strong className="text-secondary-text font-normal">99.9 </strong> are
        masked and handled. Grids are normalized, spatially aligned, and sliced to the pilot region.
        INSAT-3R NetCDF products are reprojected to match IMD&apos;s coordinate reference system.
      </>
    ),
    pills: ["xarray", "Normalization",],
  },
  {
    number: "03",
    tag: "Model Training",
    title: ["ConvLSTM —", "Space & Time"],
    description: (
      <>
        A <strong className="text-secondary-text font-normal">ConvLSTM model</strong> is trained on 7-day input sequences
        of spatial climate fields. It simultaneously learns the temporal evolution of weather patterns
        and their spatial structure across the Indian subcontinent — predicting next-day rainfall
        and temperature at each grid point.
      </>
    ),
    pills: ["ConvLSTM", "Rain", "Tmax", "Tmin"],
  },
  {
    number: "04",
    tag: "Digital Twin Layer",
    title: ["Simulating Climate", "Scenarios"],
    description: (
      <>
        Model predictions are served through a backend API. A{" "}
        <strong className="text-secondary-text font-normal">what-if scenario engine</strong> accepts modified
        input parameters — adjusted rainfall or temperature values — and runs inference to show
        how the regional climate responds. This is the core of the digital twin concept.
      </>
    ),
    pills: ["Scenario Engine", "REST API", "Inference Pipeline", "What-If Inputs"],
  },
  {
    number: "05",
    tag: "Visualisation",
    title: ["The", "Dashboard"],
    description: (
      <>
        Predicted climate fields are rendered onto an{" "}
        <strong className="text-secondary-text font-normal">interactive map of India</strong>. Users can zoom
        to any region, scrub through time, adjust scenario sliders, and observe model output in
        real time. Built with <strong className="text-secondary-text font-normal">Next.js and Tailwind v4</strong>,
        the interface makes complex spatial data legible at a glance.
      </>
    ),
    pills: ["Next.js", "Leaflet", "Tailwind"],
  },
];

const BG_COLORS = [
  "bg-[#0D1B2A]",
  "bg-[#0F2033]",
  "bg-[#112236]",
  "bg-[#132539]",
  "bg-[#15273C]",
  "bg-[#172A3F]",
];

export default function HowWeBuiltIt() {
  return (
    <section className="relative">
      {STEPS.map((step, i) => (
        <div
          key={step.number}
          style={{ zIndex: i + 1 }}
          className={`sticky top-0 min-h-screen flex flex-col justify-center px-20 py-16 border-t border-primary-accent/10 font-body text-primary-text ${BG_COLORS[i] ?? "bg-primary-bg"} max-sm:px-6 max-sm:py-12`}
        >
          <div className="max-w-[900px] mx-auto w-full grid grid-cols-[180px_1fr] gap-16 items-start max-sm:grid-cols-1 max-sm:gap-4">

            <div className="font-display text-[8rem] font-bold leading-none text-primary-accent/30 select-none max-sm:text-[4rem]">
              {step.number}
            </div>

            <div className="flex flex-col gap-4 pt-1">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary-accent inline-flex items-center gap-2 before:content-[''] before:w-5 before:h-px before:bg-primary-accent">
                {step.tag}
              </span>
              <h3 className="font-display text-4xl font-bold tracking-wide leading-tight max-sm:text-2xl">
                {step.title[0]}{" "}
                <span className="text-secondary-accent">{step.title[1]}</span>
              </h3>
              <p className="text-sm leading-loose text-muted-text font-light max-w-[540px]">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {step.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-xs tracking-[0.1em] uppercase text-secondary-accent border border-primary-accent/25 rounded-sm px-2 py-0.5 bg-primary-accent/5"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}
