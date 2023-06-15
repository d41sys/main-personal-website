'use client';

import Image from 'next/image';


export function DesignPost({design}) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm">
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
            backgroundPosition: 'center center'
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
        <div className="leading-7 [&:not(:first-child)]:mt-4 px-2">
          {design.desc}
        </div>
      </div>
    </div>
  );
}
