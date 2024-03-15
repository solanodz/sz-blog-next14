import { montserrat, poppins } from '@/ui/fonts'
import Image from 'next/image'
import React from 'react'
import { FaCss3, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

const AboutPage = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between gap-20 items-center'>
            <div>
                <h2 className={`${poppins.className} text-8xl my-3 font-bold antialiased`}>THIS IS ME</h2>
                <div className='flex flex-col gap-2 font-light text text-xl'>
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
                <div className='text-4xl text-muted-foreground flex-wrap flex my-3 gap-3 '>
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
                className=''
            />
        </div>
    )
}

export default AboutPage
