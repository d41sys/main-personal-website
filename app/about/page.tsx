import '../globals.css';
import { Timeline } from '@/components/timeline';
import { AboutHeader } from '@/components/about-header';

export default function Page() {
  return (
    <div className="container relative pb-10">
      <AboutHeader />
      <Timeline />
    </div>
  );
}