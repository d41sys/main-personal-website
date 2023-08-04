'use client';

import '../styles/globals.css';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const iconTriggerStyle = cva(
  'absolute inline-flex items-center justify-center rounded-full transition-colors disabled:opacity-80 bg-background bg-teal-400 hover:text-accent-foreground w-6 h-6 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900 mt-0.5',
);

const experiences = [
  {
    position: 'Master of Engineer',
    location: 'Soonchunhyang Univ. - 순천향대학교',
    work: false,
    time: 'Feb, 2023 - Present',
    desc: 'Research security in V2X environments',
    needAttach: false,
    attachName: 'Github',
    href: 'https://github.com',
  },
  {
    position: 'Safety & Security Executive',
    location: 'Zalo - VNG Corporation',
    work: true,
    time: 'Aug, 2022 - Jan, 2023',
    desc: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    needAttach: true,
    attachName: 'Github',
    href: 'https://github.com',
  },
  {
    position: 'Freelancer',
    location: 'Free',
    work: true,
    time: 'Aug, 2020 - Present',
    desc: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    needAttach: true,
    attachName: 'Github',
    href: 'https://github.com',
  },
  {
    position: 'University Student',
    location: 'University of Science - Vietnam National University',
    work: false,
    time: 'Aug, 2017 - Aug, 2021',
    desc: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    needAttach: false,
    attachName: '',
    href: '',
  },
];

function ExpElement({ exp }) {
  return (
    <div className="mb-10 ml-6">
      <span className={cn(iconTriggerStyle())}>
        {exp.work ? (
          <Icons.laptop className="relative h-4 w-4" viewBox="-3 -3 30 30" />
        ) : (
          <Icons.briefcase className="relative h-4 w-4" viewBox="-3 -3 30 30" />
        )}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {exp.position}{' '}
        <span className="bg-teal-100 text-teal-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
          {exp.location}
        </span>
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {exp.time}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.desc}</p>
      {exp.needAttach ? (
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com"
          className={cn(buttonVariants({ variant: 'shadow' }))}
        >
          {exp.attachName == 'Github' ? <Icons.gitHub className="mr-2 h-4 w-4" /> : <></>}
          {exp.attachName}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export function Timeline() {
  return (
    <>
      <div className="mx-5 relative border-l border-black dark:border-gray-700 mt-10 mb-20">
        {experiences.map((exp, index) => (
          <ExpElement exp={exp} />
        ))}
      </div>
    </>
  );
}
