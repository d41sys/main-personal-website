'use client';

import Image from 'next/image';


export function FeaturedArticle({article}) {
  return (
    <div className="w-96 mt-10 border border-black rounded-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-140 ease-in-out">
      <div className="flex flex-col relative">
        <Image
          className="rounded-t-sm border-b border-black"
          style={{
            marginBottom: '10px',
            objectFit: 'cover',
            width: 'auto',
            height: '170px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            filter: 'grayscale(1)'
          }}
          width={0}
          height={0}
          sizes="100vw"
          src={article.imgLink}
          alt=""
        />
        <h3 className="scroll-m-20 border-b border-black pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2">
          {article.title}
        </h3>
        <div className="leading-7 [&:not(:first-child)]:mt-4 px-2">
          {article.desc}
        </div>
        <div className="text-xs scroll-m-20 pt-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 px-2 mb-2">
          7 MIN READ
        </div>
      </div>
    </div>
  );
}
