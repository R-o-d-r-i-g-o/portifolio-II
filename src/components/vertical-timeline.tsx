"use client"

import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

type Experience = {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };

const Timeline = ({ data }: { data: Array<Experience> }) => {
  const { theme } = useTheme();

  const isLightTheme = () =>
    theme === "light"

  return (
    <VerticalTimeline>
      {data.map((experience) => (
        <VerticalTimelineElement
          visible
          key={experience.company_name}
          date={experience.date}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <Image
                src={experience.icon}
                alt={experience.company_name}
                className='w-[60%] h-[60%] object-contain'
                height={20}
                width={20}
              />
            </div>
          }
          contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: experience.iconBg,
            boxShadow: "none",
            background: isLightTheme()
              ? 'rgba(255, 255, 255, .4)'
              : 'rgba(61, 65, 73, .4)',
          }}
          contentArrowStyle={{
            borderRight: isLightTheme()
              ? '7px solid rgba(255, 255, 255, .4)'
              : '7px solid rgba(61, 65, 73, .4)',
          }}
        >
          <h3 className='dark:text-white text-black text-xl font-poppins font-semibold'>
            {experience.title}
          </h3>
          <p className='dark:text-white text-black font-medium text-base !m-0'>
            {experience.company_name}
          </p>
          <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='dark:text-white text-black/80 font-normal pl-1 text-sm'
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;