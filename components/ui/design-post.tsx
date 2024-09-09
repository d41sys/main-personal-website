'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function DesignPost({ design }) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
      <Link href={design.slug}>
        <div className="flex flex-col relative">
          <Image
            className="rounded-t-sm border-b border-black"
            style={{
              marginBottom: '10px',
              objectFit: 'cover',
              width: 'auto',
              height: '400px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
            width={0}
            height={0}
            sizes="100vw"
            src={design.imgLink}
            alt=""
          />
          <h3 className="scroll-m-20 border-b border-black text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2 h-16">
            {design.title}
          </h3>
          <div className="flex flex-row">
            {design.bags.map((bag, index) => (
              <Badge
                key={index}
                variant="illus"
                className="ml-1 nline mt-1 relative text-white text-center"
              >
                {bag}
              </Badge>
            ))}
          </div>

          <div className="leading-7 [&:not(:first-child)]:mt-3 px-2 line-clamp-4">
            {design.desc}
          </div>
        </div>
      </Link>
    </div>
  );
}
