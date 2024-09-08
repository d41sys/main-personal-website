'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function ListItemExternal({ article, itemKey }) {
  const variant = itemKey % 2 === 0 ? 'sideTitle' : 'sideTitleRe';
  return (
    <a target="_blank" href={article.slug} rel="noopener noreferrer">
      <motion.div className="flex flex-row relative justify-between border-b last:border-b-0 transition duration-140 ease-in-out hover:border hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] group h-40 mt-1">
        {/* <div className="flex flex-row pt-2">
          
          <time className="pr-2 text-sm font-normal text-gray-400 dark:text-gray-500 group-hover:text-black">
            Released on {article.time == undefined ? 'Today' : article.time}
          </time>
        </div> */}
        <Badge
          variant={variant}
          className="h-full inline relative text-center max-w-8 text-lg pt-[20px]"
        >
          {article.type.split('').map((char, index) => (
            <div key={index}>{char}</div>
          ))}
        </Badge>
        <div className="flex flex-col w-full justify-center">
          <span className="font-bold pl-2 text-lg inline-block text-neutral-500 dark:text-neutral-600 group-hover:text-black pt-2">
            {article.title}
          </span>
          <span className="pl-2 inline-block text-neutral-500 dark:text-neutral-600 group-hover:text-black">
            {article.author}
          </span>
          <span className="font-thin pl-2 inline-block text-neutral-500 dark:text-neutral-600 group-hover:text-black">
            {article.journal}
          </span>
          <div className="flex flex-row pt-2 pb-2">
            <Badge variant="uidesign" className="ml-1 inline relative text-white text-center max-w-24">
              Q1 Journal
            </Badge>
          </div>
        </div>
      </motion.div>
    </a>
  );
}
