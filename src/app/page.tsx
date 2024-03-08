/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import CTA from "../components/cta";
import Tooltip from '../components/tooltip'

import Timeline from '../components/vertical-timeline'

import { experiences, skills } from "../constants";

const Home = () => (
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
        {skills.map((skill, i) => (
          <Tooltip key={i} message={skill.name}>
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </Tooltip>
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
        <Timeline data={experiences} />
      </div>
    </div>
    <hr className='dark:border-slate-200 border-black'/>
    <CTA />
  </section>
);

export default Home;
