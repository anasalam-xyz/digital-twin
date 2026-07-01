import { ExternalLink, BookOpen, Database, BarChart2, LayoutDashboard } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import Link from "next/link";

const RESOURCES = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    label: "Live Dashboard",
    desc: "Interactive climate map — Kerala pilot",
    href: "https://digitaltwin-in.vercel.app/dashboard",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "Frontend Source",
    desc: "Next.js dashboard and documentation site",
    href: "https://github.com/anasalam-xyz/digital-twin",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: "Data Processing Pipeline",
    desc: "Data preprocessing and ClimateDualNet training",
    href: "https://github.com/aditya-raj9125/Digital-Twin",
  },
  {
    icon: <SiGooglecolab className="w-5 h-5" />,
    label: "Model Training Notebook",
    desc: "ClimateDualNet — Google Colab",
    href: "https://colab.research.google.com/drive/1mf-kjpPhyaed0wkHWKu9GKIkK4DFwS6H?usp=sharing",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    label: "Checkpoints & Diagnostics",
    desc: "Trained weights and validation plots",
    href: "https://drive.google.com/drive/folders/1efm85dzpRnf6ufU3qKhlyTZWFP1JGwMd?usp=sharing",
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: "Architecture Document",
    desc: "Detailed technical report and model design",
    href: "https://docs.google.com/document/d/1KsxmaGxhuVIss7dc9mCIEOfIbnENyrDp60bkAkGDPnI/edit",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="bg-secondary-bg px-20 py-20 font-body text-primary-text max-sm:px-6 max-sm:py-12">

      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary-accent mb-4">
          Project Links
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide leading-tight">
          Resources
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {RESOURCES.map(({ icon, label, desc, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-5 bg-primary-bg border border-primary-accent/15 rounded-sm hover:border-primary-accent/50 hover:bg-[#0F2033] transition-all duration-200"
          >
            <span className="flex-shrink-0 mt-0.5 text-primary-accent group-hover:text-secondary-accent transition-colors duration-200">
              {icon}
            </span>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-secondary-text group-hover:text-primary-text transition-colors duration-200">
                  {label}
                </p>
                <ExternalLink className="w-3 h-3 text-muted-text opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
              </div>
              <p className="text-xs text-muted-text font-light leading-relaxed">
                {desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
