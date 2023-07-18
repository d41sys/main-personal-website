'use client';

import '../styles/globals.css';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const iconTriggerStyle = cva(
  'absolute inline-flex items-center justify-center rounded-full transition-colors disabled:opacity-80 bg-background bg-teal-400 hover:text-accent-foreground w-6 h-6 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900 mt-0.5',
);

export function Timeline() {
  return (
    <ol className="mx-5 relative border-l border-black dark:border-gray-700 mt-10 mb-20">
      <li className="mb-10 ml-6">
        <span className={cn(iconTriggerStyle())}>
          <Icons.briefcase className="relative h-4 w-4" viewBox="-3 -3 30 30" />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Safety & Security Executive{' '}
          <span className="bg-teal-100 text-teal-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
            Zalo
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Aug, 2022 - Jan, 2023
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </p>
        <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com"
            className={cn(buttonVariants({ variant: "shadow" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
      </li>
      <li className="mb-10 ml-6">
        <span className={cn(iconTriggerStyle())}>
          <Icons.briefcase className="relative h-4 w-4" viewBox="0 0 25 25" />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Flowbite Figma v1.3.0
          <span className="bg-teal-100 text-teal-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
            Latest
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Released on December 7th, 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we keep a parity between
          the two versions even as we update the project.
        </p>
      </li>
      <li className="ml-6">
        <span className={cn(iconTriggerStyle())}>
          <Icons.briefcase className="relative h-4 w-4" viewBox="0 0 25 25" />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Flowbite Library v1.2.2
          <span className="bg-teal-100 text-teal-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
            Fixed
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Released on December 2nd, 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements built on top of
          Tailwind CSS.
        </p>
      </li>
    </ol>
  );
}
