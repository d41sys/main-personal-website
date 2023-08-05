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
    'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  ],
  [
    'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
  ],
  [
    'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  ],
  [
    'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
  ],
];
export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 ">
      {imageLinks.map((imagePacks, index) => (
        <div className="grid gap-4">
          {imagePacks.map((imageLink, index) => (
            <Image
              className="border border-black"
              style={{ width: '100%', height: 'auto' }}
              width={0}
              height={0}
              sizes="100vw"
              src={imageLink}
              alt=""
            />
          ))}
        </div>
      ))}
    </div>
  );
}
