'use client';

import Image from 'next/image';


export function FeaturedArticle({article}) {
  return (
    <div className="w-96 mt-10">
      <div className="flex flex-col relative">
        <Image
          className="rounded-lg "
          style={{
            marginBottom: '20px',
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
        <h3 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
          {article.title}
        </h3>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          {article.desc}
        </div>
        <div className="text-xs scroll-m-20 pt-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
          7 MIN READ
        </div>
      </div>
    </div>
  );
}
