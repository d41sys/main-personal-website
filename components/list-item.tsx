import Link from 'next/link';

export function ListItem({ article }) {
  return (
    <>
      <div className="flex flex-row relative justify-between border-b h-28 last:border-b-0 items-center">
        <span className="text-lg font-bold inline-block max-w-4xl text-neutral-500 dark:text-neutral-600">
          {article.title}
        </span>
        <time className="text-sm font-normal text-gray-400 dark:text-gray-500">
          Released on {article.time == undefined ? 'Today' : article.time}
        </time>
      </div>
    </>
  );
}
