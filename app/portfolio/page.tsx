import '../globals.css';
import { Timeline } from '@/components/timeline';
import { Gallery } from '@/components/gallery';
import { GallerySlider } from '@/components/gallery-slider';
import { FeaturedArticle } from '@/components/ui/featured-article';

const articles = [
  {
    imgLink: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    title: "1 Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    desc: "1 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users."
  },
  {
    imgLink: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    title: "2 Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    desc: "2 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users."
  },
  {
    imgLink: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    title: "3 Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    desc: "3 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users."
  },
  {
    imgLink: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    title: "4 Lessons learned from growing a 6,338 people waitlist in 7 weeks",
    desc: "4 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users."
  },
]

export default function Page() {
  return (
    <div className="container relative pb-10">
      <div className='flex flex-row gap-10'>
        {articles.map((article) => <FeaturedArticle article={article} />)}
      </div>
    </div>
  );
}
