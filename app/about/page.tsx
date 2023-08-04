import '../globals.css';
import { Timeline } from '@/components/timeline';
import { AboutHeader } from '@/components/about-header';
import { DesignPostSmall } from '@/components/ui/design-post-small';
import { ListItem } from '@/components/list-item';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';

const designs = [
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    title: 'Audio Injection On Controllable Systems',
    desc: "Journal Of Science And Technology On Information Security",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
    title: '2 Lessons learned',
    desc: "2 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/6404270/file/original-14a38d9f6104bb3c0eb3e859e2e4ede1.jpg?compress=1&resize=1504x1128',
    title: '3 Lessons learned',
    desc: "3 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '4 Lessons learned',
    desc: "4 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '5 Lessons learned',
    desc: "5 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '6 Lessons learned',
    desc: "6 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '7 Lessons learned',
    desc: "7 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
];

export default function Page() {
  return (
    <div className="container relative pb-10 selection:bg-pinkCustom selection:text-black">
      <AboutHeader />

      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">Experiences</PageHeaderHeading>
        <Timeline/>
        <PageHeaderHeading className="md:text-3xl">Academic & Publications</PageHeaderHeading>
        <div className="flex flex-col w-full relative">
          {designs.map((article, index) => (
            <ListItem article={article} key={index}/>
          ))}
        </div>
      </PageHeader>
    </div>
  );
}
