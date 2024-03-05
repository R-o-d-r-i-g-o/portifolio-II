/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import { useTheme } from "next-themes";

import CTA from "../components/cta";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    console.log('o que veio')
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <section className='max-container'>
    <h1 className='head-text'>
      <span className='flex gap-3'>
        Hello, I'm
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Rodrigo
        </span>
        <span className="animate-waving-hand">👋🏻</span>
      </span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 dark:text-slate-500 text-black'>
      <p>
        Software Engineer at Q2 Group, based in Brazil, responsible for planning and developing
        high-quality, scalable, and fault-tolerant solutions.
      </p>
      <p>
        Experienced in leading innovative projects, I prioritize performance optimization, user
        experience, and robust security measures, consistently achieving high delivery rates.
      </p>
    </div>

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>Technologies.</h3>

      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20' key={skill.name}>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <Image
                src={skill.imageUrl}
                alt={skill.name as string}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='py-16'>
      <h3 className='subhead-text'>Work Experience.</h3>
      <div className='mt-5 flex flex-col gap-3 dark:text-slate-500 text-black'>
        <p>
          I've had the opportunity to collaborate with a variety of teams, refining my
          skills and working alongside talented individuals. Here's the rundown:
        </p>
        <p>
          Note: Certifications will be provided exclusively on LinkedIn.
        </p>
      </div>

      <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                visible
                // className="black:bg-white bg-slate-500"
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                contentStyle={{
                  // background: 'rgb(33, 150, 243)',
                  // color: '#fff',
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div className="black:bg-white bg-slate-500">
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


    <hr className='dark:border-slate-200 border-black'/>

    <CTA />
    <button onClick={handleThemeChange}>Light Mode</button>
  </section>
  );
}
