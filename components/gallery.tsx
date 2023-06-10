'use client';

import '../styles/globals.css';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const imageLinks = [
  [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  ],
  [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  ],
  [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  ],
  [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
  ],
];
export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {imageLinks.map((imagePacks) => 
        <div className="grid gap-4">
          {imagePacks.map((imageLink) =>
            <Image
              className="rounded-lg"
              style={{ width: '100%', height: 'auto' }}
              width={0}
              height={0}
              sizes="100vw"
              src={imageLink}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}
