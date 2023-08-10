'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function FeaturedProject({ project }) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
      <Link href={project.slug}>
        <div className="flex flex-col relative mt-1">
          <div className="flex">
            {project.tags.map((tag, index) => (
              <Badge variant="article" className="ml-1 inline mb-1 relative text-white text-center" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="scroll-m-20 border-b border-black pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2">
            {project.title}
          </h3>
          <div className="leading-7 [&:not(:first-child)]:mt-4 px-2 mb-2">{project.description}</div>
        </div>
      </Link>
    </div>
  );
}
