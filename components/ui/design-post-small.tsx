'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export function DesignPostSmall({ design }) {
  return (
    <div className="w-full mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
      <Link href={design.slug}>
        <div className="flex flex-row relative">
          <Image
            className="rounded-l-sm border-r border-black"
            style={{
              objectFit: 'cover',
              width: '500px',
              height: '160px',
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

          <div className="flex flex-col justify-between ml-2">
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2">
                {design.title}
              </h2>
              <div className="leading-7 [&:not(:first-child)]:mt-1 px-3 line-clamp-3 max-w-3xl">
                {design.desc}
              </div>
            </div>
            <div className="flex flex-row pb-3">
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
          </div>
        </div>
      </Link>
    </div>
  );
}
