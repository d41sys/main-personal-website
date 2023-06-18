'use client';

import Image from 'next/image';
import { Badge } from "@/components/ui/badge"

export function DesignPost({ design }) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
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
        <h3 className="scroll-m-20 border-b border-black pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2">
          {design.title}
        </h3>
        <div className="flex flex-row">
          <Badge variant='uidesign' className='ml-1 inline mt-1 relative text-white text-center'>UI Design</Badge>
          <Badge variant='code' className='ml-1 inline mt-1 relative text-white text-center'>Code</Badge>
          <Badge variant='illus' className='ml-1 nline mt-1 relative text-white text-center'>Illustration</Badge>
        </div>
        
        <div className="leading-7 [&:not(:first-child)]:mt-3 px-2">{design.desc}</div>
      </div>
    </div>
  );
}
