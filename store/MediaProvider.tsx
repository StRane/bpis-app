import MediaContext from "./media-context";

import Image1 from "../images/events_news/bpisopenhouse2020.jpg";
import Image1sm from "../images/events_news/bpisopenhouse2020_300.jpg";
import Image2 from "../images/events_news/kingrama9_1.jpg";
import Image2sm from "../images/events_news/kingrama9_1_300.jpg";
import Image3 from "../images/events_news/LoyKrathong.jpg";
import Image3sm from "../images/events_news/LoyKrathong_300.jpg";
import Image4 from "../images/events_news/IMG_2955r.jpg";
import Image4sm from "../images/events_news/IMG_2955r_300.jpg";
import Image5 from "../images/events_news/IMG_3005r.jpg";
import Image5sm from "../images/events_news/IMG_3005r_300.jpg";

import Image6 from "../images/events_news/thammasat_visit_3.jpg";
import Image6sm from "../images/events_news/thammasat_visit_3_sm.jpg";
import Image7 from "../images/events_news/event_council.jpg";
import Image7sm from "../images/events_news/event_council_sm.jpg";

import Image8 from "../images/events_news/student_council_2022.webp";
import Image8sm from "../images/events_news/student_council_2022_sm.webp";
import Image9 from "../images/events_news/Loy_2022.jpg";
import Image9sm from "../images/events_news/Loy_2022sm.webp";
import Image10 from "../images/events_news/Sports_day.jpg";
import Image10sm from "../images/events_news/Sports_daysm.jpg";



const MediaProvider = (props: any) => {
  const media = {
    activities: [
      {
        name: "activity10",
        title: "Student Council Inauguration",
        day: "05",
        month: "September",
        adress: Image8.src,
        adresssm: Image8sm.src,
        id: 10,
        year: 2022
      },
      {
        name: "activity9",
        title: "Loy Krathong fashion show 2022",
        day: "03",
        month: "April",
        adress: Image9.src,
        adresssm: Image9sm.src,
        id: 9,
        year: 2022
      },
      {
        name: "activity8",
        title: "Sports day team competition",
        day: "03",
        month: "April",
        adress: Image10.src,
        adresssm: Image10sm.src,
        id: 8,
        year: 2022
      },
      {
        name: "activity7",
        title: "BPIS Open House 2020",
        day: "03",
        month: "April",
        adress: Image1.src,
        adresssm: Image1sm.src,
        id: 7,
        year: 2022
      },
      {
        name: "activity6",
        title: "Loy Krathong Fashion Show 2019",
        eventDetails:
          "One of the activities we had for Loy Krathong Festival was to showcase Thai dresses. The fashion show was participated by our gorgeous students from different backgrounds.",
        day: "03",
        month: "April",
        adress: Image3.src,
        adresssm: Image3sm.src,
        id: 6,
        year: 2019
      },
      {
        name: "activity5",
        title: "Anniversary of the death of King Rama 9",
        eventDetails: "We had a ceremony for King Rama 9’s death anniversary.",
        day: "03",
        month: "April",
        adress: Image2.src,
        adresssm: Image2sm.src,
        id: 5,
        year: 2019
      },
      {
        name: "activity4",
        title: "International Achievement Day",
        eventDetails:
          "Before the summer holiday different academic achievements were celebrated. They were the students who got the highest score in their class, who showed excellent physical performance and who joined our transitional term. Each one of them received a certificate and have become more motivated to strive for more goals in extracurricular and educational activities. We are looking forward to seeing more of our students grow as global citizens.",
        day: "03",
        month: "April",
        adress: Image4.src,
        adresssm: Image4sm.src,
        id: 4,
        year: 2019
      },
      {
        name: "activity3",
        title: "Under the Stars",
        eventDetails:
          "The first International Academic Year ended with a formal party attended by students and teachers. The night of the 28th of July was made possible with the coordination of the Head Boy and the Head Girl, the Student Council under the supervision of Ms. Claire and Ms. Lee. During the party, the enthusiasm of each and every student combined to create an unforgettable atmosphere of pure liveliness and exuberance that will be remembered for many years.",
        day: "03",
        month: "April",
        adress: Image5.src,
        adresssm: Image5sm.src,
        id: 3,
        year: 2019
      },
      {
        name: "activity2",
        title: "Thammasat University Visit",
        eventDetails:
          "Our Key stage 4 & 5 students will have an opportunity to see and experience student life of excellent universities for further education. It will also serve as a window for Key Stage 3 students in discerning their educational path",
        day: "03",
        month: "April",
        adress: Image6.src,
        adresssm: Image6sm.src,
        id: 2,
        year: 2019
      },
      {
        name: "activity1",
        title: "Student Council Campaign and Election",
        eventDetails:
          "Detail: Council members will be elected in their respective classes and the Head Boy and Head Girl candidates will campaign and elected by the students and teachers.",
        day: "03",
        month: "April",
        adress: Image7.src,
        adresssm: Image7sm.src,
        id: 1,
        year: 2019
      },
    ],
    menuitem:[
      {
        name: "About BPIS",
        id: 0,
        hovering: false,
        submenu: [
          { title: "Our History", adress: "/about-BPIS/history" },
          { title: "Our Vision and Mission", adress: "/about-BPIS/vision" },
          { title: "Our Core Values", adress: "/about-BPIS/core" },
          { title: "Achievements", adress: "/about-BPIS/achievements" },
        ],
      },
      {
        name: "Admissions",
        id: 1,
        hovering: false,
        submenu: [
          { title: "School Fees", adress: "/admissions/school-fees" },
          { title: "Procedure", adress: "/admissions/procedure" },
        ],
      },
      {
        name: "Academics",
        id: 2,
        hovering: false,
        target:"/academics",
        submenu: [
          { title: "Yr. 7-9 (Key Stage3)", adress: "/academics/yr7-9-program" },
          { title: "Yr. 10-11 (IGCSE)", adress: "/academics/yr10-11-program" },
          { title: "Yr. 12-13 (A-Level)", adress: "/academics/yr12-13-program" },
        ],
      },
      {
        name: "Connect",
        id: 3,
        hovering: false,
        submenu: [
          { title: "Activities", adress: "/activities" },
          { title: "Gallery", adress: "/gallery" },
          { title: "School Magazine", adress: "/school-magazine" },
        ],
      },
      {
        name: "Schedule",
        id: 4,
        target: "/schedule",
      },
      {
        name: "Contact Us",
        id: 5,
        target: "/contact-us",
      },
    ]
  };

  return (
    <MediaContext.Provider value={media}>
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
