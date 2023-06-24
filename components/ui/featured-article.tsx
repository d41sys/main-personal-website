'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function FeaturedArticle({ article }) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
      <Link href={article.slug}>
        <div className="flex flex-col relative">
          <Image
            className=" border-b border-black"
            style={{
              marginBottom: '10px',
              objectFit: 'cover',
              width: 'auto',
              height: '170px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              filter: 'grayscale(0)',
            }}
            width={0}
            height={0}
            sizes="100vw"
            src={article.img}
            alt=""
          />
          <div className="flex">
            {article.tags.map((tag) => (
              <Badge variant="article" className="ml-1 inline mb-1 relative text-white text-center">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="scroll-m-20 border-b border-black pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2">
            {article.title}
          </h3>
          <div className="leading-7 [&:not(:first-child)]:mt-4 px-2">{article.description}</div>
          <div className="text-xs scroll-m-20 pt-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2 mb-2">
            {article.readingTime.text}
          </div>
        </div>
      </Link>
    </div>
  );
}
