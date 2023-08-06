import '../globals.css';
import { Timeline } from '@/components/timeline';
import { AboutHeader } from '@/components/about-header';
import { DesignPostSmall } from '@/components/ui/design-post-small';
import { ListItem } from '@/components/list-item';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { allDesigns } from '@/config/portfolio';

export default function Page() {
  return (
    <div className="container relative pb-10 selection:bg-pinkCustom selection:text-black">
      <AboutHeader />

      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">Experiences</PageHeaderHeading>
        <Timeline/>
        <PageHeaderHeading className="md:text-3xl">Academic & Publications</PageHeaderHeading>
        <div className="flex flex-col w-full relative">
          {allDesigns.map((article, index) => (
            <ListItem article={article} key={index}/>
          ))}
        </div>
      </PageHeader>
    </div>
  );
}
