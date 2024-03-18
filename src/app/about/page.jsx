import { montserrat, poppins } from '@/ui/fonts'
import Image from 'next/image'
import React from 'react'
import { FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

export const metadata = {
    title: 'sz.blog | About Me',
    description: 'sz.blog | About Me page',
}

const AboutPage = () => {
    return (
        <div className="items-start min-h-[45rem] sm:mx-12 mx-0 w-fit dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

            <div className='flex lg:flex-row flex-col justify-between gap-20 mx-6 items-center'>
                <div className='h-fit items-center relative'>
                    <h2 className={`${poppins.className} text-4xl sm:text-7xl my-3 font-bold antialiased `}>THIS IS ME</h2>
                    <div className='flex flex-col gap-2 font-light text text-xs sm:text-xl relative'>
                        <p>
                            I&apos;M NOT JUST A FRONT-END DEVELOPER. I ALSO HOLD A DEGREE IN PHYSICAL EDUCATION FROM TUCUMAN, ARGENTINA. MY PASSION FOR SPORTS AND FITNESS HAS ALWAYS DRIVEN ME, BUT AMIDST THE CHALLENGES OF THE COVID PANDEMIC, I DISCOVERED THE EXCITING WORLD OF PROGRAMMING AND REMOTE WORK.
                        </p>
                        <p>
                            INTRIGUED BY THIS NEW PASSION, I DELVED INTO LEARNING HTML, CSS, AND JAVASCRIPT THROUGH FREE ONLINE COURSES. A YEAR LATER, I COMPLETED A FULL-STACK DEVELOPER PROGRAM AT CODERHOUSE, MASTERING THE MERN STACK.
                        </p>
                        <p>
                            TODAY, I&apos;M WORKING WITH PERSONAL PROJECTS AND FREELANCING, EAGERLY AWAITING THE CHANCE TO BRING MY EXPERTISE TO A DYNAMIC TEAM.
                        </p>

                    </div>
                    <div className='text-2xl sm:text-4xl text-muted-foreground flex-wrap flex my-3 gap-1 sm:gap-3 '>
                        <FaFigma className='hover:scale-110 duration-200' />
                        <FaHtml5 className='hover:scale-110 duration-200' />
                        <FaCss3 className='hover:scale-110 duration-200' />
                        <SiTailwindcss className='hover:scale-110 duration-200' />
                        <FaJs className='hover:scale-110 duration-200' />
                        <FaReact className='hover:scale-110 duration-200' />
                        <SiNextdotjs className='hover:scale-110 duration-200' />
                        <FaNodeJs className='hover:scale-110 duration-200' />
                        <SiExpress className='hover:scale-110 duration-200' />
                        <SiMongodb className='hover:scale-110 duration-200' />
                        <SiFirebase className='hover:scale-110 duration-200' />
                        <SiVercel className='hover:scale-110 duration-200' />
                        <FaGitAlt className='hover:scale-110 duration-200' />
                        <FaGithub className='hover:scale-110 duration-200' />

                    </div>
                </div>
                <Image
                    src='/foto-perfil.JPG'
                    quality={100}
                    alt='foto de perfil'
                    height={400}
                    width={400}
                    className='mb-12 sm:my-auto relative'
                />
            </div>
        </div>
    )
}

export default AboutPage
