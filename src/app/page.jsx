"use client"

import { Button } from "@/components/ui/button";
import { montserrat, poppins, rock } from "@/ui/fonts";
import { Laugh } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-black flex flex-col my-2 sm:my-12 text-left tracking-tighter ">
      <div className="h-screen">
        <div className="items-left flex justify-between gap-6">
          {/* <div className=" flex-row flex items-center text-muted-foreground gap-3 ">
          <h2 className={`${montserrat.className} font-medium text-3xl antialiased`}>
            Welcome
          </h2>
          <Laugh />
        </div> */}
          <div className="items-center flex flex-col mx-auto my-12 text-center">
            <h1 className={`${rock.className} font-light text-7xl sm:text-8xl md:text-9xl tracking-tighter antialiased`}> SZ.BLOG</h1>

            <div className="flex gap-3 my-6">
              <Button variant={'default'}>Check my portfolio</Button>
              <Button variant={'outline'}>Read my blog</Button>
            </div>
          </div>
        </div>
        <div>
          <p className={`${poppins.className} my-28 ml-auto text-xl sm:text-3xl max-w-sm sm:max-w-xl text-white font-thin text-right leading-5 sm:leading-7`}>I&apos;M <span className="font-medium ">SOLANO</span>. A <span className="font-medium ">FRONT-END DEVELOPER </span>WHO LOVES TO DESIGN AND DEVELOP MODERN WEBSITES.</p>
        </div>
      </div>
      <section className="justify-between flex flex-col md:flex-row items-center">
        <div className="h-[45rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.15] bg-grid-black/[0.15] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className=" text-3xl md:text-5xl sm:max-w-6xl font-bold text-zinc-200 text-center mx-auto my-96">
            AS A FRONT-END DEVELOPER I SEE MYSELF AS A <span className="font-black text-red-500">CREATOR OF AESTHETICS AND FUNCTIONALITY.</span> I LOVE TO WORK WITH MODERN TOOLS AND FRAMEWORKS TO CREATE BEAUTIFUL AND FUNCTIONAL WEBSITES. I ALSO LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCE WITH OTHERS, SO I HOPE YOU ENJOY MY BLOG AND MY PORTFOLIO.
          </p>
          {/* <div className="w-[700px] h-[700px] text-center items-center flex justify-center text-red-500 font-bold text-7xl bg-zinc-800"><p>PONER ALGUN 3D</p></div> */}
        </div>
      </section>
    </div>
  )
};

export default Home;