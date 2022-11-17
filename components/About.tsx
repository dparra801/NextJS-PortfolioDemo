import React from "react";
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-col relative h-screen text-central md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
    
            <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{
                once: true
            }}
            src="https://i.ibb.co/Vt9HWfs/IMG-0396.jpg"
            className="mt-9 -mb-20 md:mb-0 flex-shrink-0 w-56 h-62 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[640px]"
        />

        <div className="space-y-10 px-0 md:px-10 text-center">
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background
            </h4>
            <p className="text-base text-center">
                I'm Diego! I've been coding for about one year now. What we all went through during the pandemic
                 motivated me to pursue my passion for coding and development. I'm looking to bring that passion 
                 to a full-time role as a full-stack software engineer. As an experienced professional with six
                 years of experience in the legal, health insurance and supply-chain industries, I have developed the 
                 work ethic, organizational skills, and customer-focused acumen that is valued in any 
                 forward-thinking company.
            </p>
        </div>
    </motion.div>
  )
}

export default About