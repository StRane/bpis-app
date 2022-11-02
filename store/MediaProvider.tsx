import MediaContext from "./media-context";

import Image1 from "../images/events_news/news/bpisopenhouse2020.jpg";
import Image1sm from "../images/events_news/news/bpisopenhouse2020_300.jpg";
import Image2 from "../images/events_news/news/kingrama9_1.jpg";
import Image2sm from "../images/events_news/news/kingrama9_1_300.jpg";
import Image3 from "../images/events_news/news/LoyKrathong.jpg";
import Image3sm from "../images/events_news/news/LoyKrathong_300.jpg";
import Image4 from "../images/events_news/news/IMG_2955r.jpg";
import Image4sm from "../images/events_news/news/IMG_2955r_300.jpg";
import Image5 from "../images/events_news/news/IMG_3005r.jpg";
import Image5sm from "../images/events_news/news/IMG_3005r_300.jpg";

import Image6 from "../images/events_news/events/thammasat_visit_3.jpg";
import Image6sm from "../images/events_news/events/thammasat_visit_3_sm.jpg";
import Image7 from "../images/events_news/events/event_council.jpg";
import Image7sm from "../images/events_news/events/event_council_sm.jpg";

const MediaProvider = (props: any) => {
  const media = {
    activities: [
      {
        name: "news1",
        title: "BPIS Open House 2020",
        day: "03",
        month: "April",
        adress: Image1.src,
        adresssm: Image1sm.src,
        id: 1,
      },
      {
        name: "news2",
        title: "Loy Krathong Fashion Show 2019",
        day: "03",
        month: "April",
        adress: Image2.src,
        adresssm: Image2sm.src,
        id: 2,
      },
      {
        name: "news3",
        title: "Anniversary of the death of King Rama 9",
        day: "03",
        month: "April",
        adress: Image3.src,
        adresssm: Image3sm.src,
        id: 3,
      },
      {
        name: "news4",
        title: "International Achievement Day",
        day: "03",
        month: "April",
        adress: Image4.src,
        adresssm: Image4sm.src,
        id: 4,
      },
      {
        name: "news5",
        title: "Under the Stars",
        day: "03",
        month: "April",
        adress: Image5.src,
        adresssm: Image5sm.src,
        id: 6,
      },
      {
        name: "event1",
        title: "Thammasat University Visit",
        day: "03",
        month: "April",
        adress: Image6.src,
        adresssm: Image6sm.src,
        id: 7,
      },
      {
        name: "event2",
        title: "Student Council Campaign and Election",
        day: "03",
        month: "April",
        adress: Image7.src,
        adresssm: Image7sm.src,
        id: 8,
      },
    ],
  };

  return (
    <MediaContext.Provider value={media}>
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
