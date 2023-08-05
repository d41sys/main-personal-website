'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function ListItem({ article }) {
  return (
    <Link href={article.slug}>
      <motion.div
        className="flex flex-row relative justify-between border-b h-24 max-h-28 last:border-b-0 items-center transition duration-140 ease-in-out hover:border hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)] group"
      >
        <span className="pl-2 text-lg font-bold inline-block max-w-4xl text-neutral-500 dark:text-neutral-600 group-hover:text-black">
          {article.title}
        </span>
        <time className="pr-2 text-sm font-normal text-gray-400 dark:text-gray-500 group-hover:text-black">
          Released on {article.time == undefined ? 'Today' : article.time}
        </time>
      </motion.div>
    </Link>
  );
}
