import './framer/styles.css';

import MeetYourGuidesFramerComponent from './framer/meet-your-guides';
import MeetYourGuidanceFramerComponent from './framer/meet-your-guidence';
import FeedYourMindFramerComponent from './framer/feed-your-mind';
import FooterFramerComponent from './framer/footer';
import HeaderFramerComponent from './framer/header';
import HeroFramerComponent from './framer/hero';
import CallOrTextFramerComponent from './framer/call-or-text';
import CloseFramerComponent from './framer/close';
// import VideoFramerComponent from './framer/video';
import ProblemFramerComponent from './framer/the-problem';
import JournalColumnsFramerComponent from './framer/journal-columns';
import TextingFramerComponent from './framer/texting';
import AccordionFramerComponent from './framer/faq-section';
import GeneralFramerComponent from './framer/button/general';
import JournalIdeasFramerComponent from './framer/journal-ideas';

export default function App() {
    return (
        <div className="flex flex-col items-center gap-3 bg-[rgb(255,_255,_255)] overflow-hidden">
        <HeaderFramerComponent.Responsive />
        <br />
        <br />
        <br />
      <HeroFramerComponent.Responsive />
      <ProblemFramerComponent.Responsive />
      {/* <MeetYourGuidesFramerComponent.Responsive /> */}
      <MeetYourGuidanceFramerComponent.Responsive />

      <CallOrTextFramerComponent.Responsive />
      <FeedYourMindFramerComponent.Responsive />
      <JournalColumnsFramerComponent.Responsive />
    
      {/* <CloseFramerComponent.Responsive /> */}
      {/* <VideoFramerComponent.Responsive
        uRL={
            'https://yomitllqcuvarqivjfru.supabase.co/storage/v1/object/public/innermostvideo/HPSQUARE/HPSQUARE_EMILY.mp4'
            }
            /> */}
      <AccordionFramerComponent.Responsive />
      {/* <JournalIdeasFramerComponent.Responsive /> */}
      {/* <CloseFramerComponent.Responsive /> */}
      <FooterFramerComponent.Responsive />
    </div>
  );
}
