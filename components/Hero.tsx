import Image from "next/image";
import globeImg from "@/public/assets/globe_cropped.png"; 
import { ArrowRight, MoveRight, LayoutDashboard, Waypoints, Presentation} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[url('@/public/assets/hero.svg')] bg-[length:auto_160%] bg-center bg-no-repeat h-screen flex flex-col overflow-hidden px-8 py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent z-0" />

      <div className="flex flex-row justify-between">
        <div className="mx-8 py-4  text-primary-text border-b-2 border-primary-accent animate-[fadeIn_1s_ease_both] max-sm:static max-sm:text-center">
  
          <p className="text-primary-text font-display text-3xl font-extrabold leading-snug tracking-wide">
            India&apos;s Digital <span className="text-secondary-text">Twin</span>
          </p>
          <p className="text-secondary-text font-medium font-mono text-sm tracking-[0.16em] uppercase text-primary-text mt-1">
            AI-Powered Climate Simulation
          </p>
        </div>

        <div className="font-bold font-mono text-right animate-[fadeIn_1s_ease_both] max-sm:static max-sm:text-center">
          <p className="text-sm tracking-[0.14em] uppercase">
            ISRO — BAH 2026
          </p>
          <p className="text-xs tracking-[0.12em] uppercase mt-1">
            Challenge 05
          </p>
        </div>
      </div>

      {/* Globe
      <div className="flex items-center justify-center my-4 animate-[float_7s_ease-in-out_infinite]">
        <Image
          src={globeImg}
          alt="Earth — India's Digital Twin"
          className="fdakw-[clamp(220px,38vw,460px)] drop-shadow-[0_30px_60px_rgba(86,124,141,0.12)] max-sm:w-[180px]"
          priority
        />
      </div>*/}

      <div className="px-8 h-full w-full flex flex-row justify-between">
      <div className="mt-12 text-primary-text h-full md:max-w-[25%] flex flex-col justify-start items-center text-left text-sm leading-relaxed text-secondary-text font-medium ">
        <p className="animate-[fadeIn_2.5s_ease_both] border-b border-secondary-bg mb-6 pb-6">
          Built on IMD gridded rainfall &amp; temperature records, INSAT-3R satellite
          products, and ConvLSTM deep learning — modelling and predicting India&apos;s
          atmospheric conditions at spatial resolution.
        </p>
        <p className="animate-[fadeIn_2.5s_ease_both]">
          A what-if scenario engine lets you adjust temperature or rainfall inputs and
          observe the predicted regional climate response.
        </p>
      </div>

      <div className="mb-8 border-l-2 border-secondary-bg font-body self-end flex flex-col gap-1 animate-[fadeIn_2.5s_ease_both] pl-4">

        <button className="w-full px-5 py-2.5 bg-secondary-accent text-primary-bg rounded-sm inline-flex items-center gap-3 cursor-pointer group transition-all duration-300 hover:bg-secondary-bg hover:text-primary-text ">
          <LayoutDashboard className="w-4 shrink-0 group-hover:rotate-90 transition-all duration-400" />
          <p className="text-sm font-medium tracking-wide">Go To Dashboard</p>
        </button>

        <button className="w-full px-5 py-2.5 border border-muted-text text-secondary-text hover:text-secondary-bg rounded-md inline-flex items-center gap-3 cursor-pointer group transition-all duration-300 hover:bg-secondary-text">
          <Waypoints className="w-4 shrink-0 group-hover:rotate-90 transition-all duration-400" />
          <p className="text-sm font-normal tracking-wide">See Presentation</p>
        </button>

        <button className="w-full px-5 py-2.5 text-muted-text rounded-full inline-flex items-center gap-3 cursor-pointer group transition-all duration-300 hover:text-secondary-accent">
          <Presentation className="w-4 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
          <p className="text-sm font-normal tracking-wide">Our Approach</p>
        </button>

      </div>      
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-(family-name:--font-mono) text-[9px] tracking-[0.14em] uppercase text-[#B0BFCA] whitespace-nowrap animate-[fadeIn_2s_ease_both] max-sm:hidden">
        Pilot Region · Delhi NCR &nbsp;·&nbsp; IMD + INSAT-3R &nbsp;·&nbsp; ConvLSTM
      </p>

    </section>
  );
}
