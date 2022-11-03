import { useState } from "react";

import GalleryContent from "./gallerytext";

import Image from "next/image";


import { useTransition, animated as a } from "react-spring";

import slider1 from "../../../images/main_gallery/BPIS-logo-slider.webp";
import slider2 from "../../../images/main_gallery/slider1.webp";
import slider3 from "../../../images/main_gallery/slider2.webp";
import slider4 from "../../../images/main_gallery/slider3.webp";
import useWindowDimensions from "../../helper/WindowDimensions";

type galleryItem = {
  name: string;
  pic: string;
  toptext?: string;
  bottext?: string;
  main: boolean;
  schoolname?: boolean;
  id: number;
};

const MainGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    {
      name: "BPIS-main-logo",
      pic: slider1.src,
      main: true,
      id: 0,
    },
    {
      name: "Bpis-science-experiment",
      pic: slider2.src,
      toptext: "A Partnership in Discover on ",
      schoolname: true,
      main: false,
      bottext: "Exploring innovative methods to address (future) problems.",
      id: 1,
    },
    {
      name: "Bpis-students-cheerful",
      pic: slider3.src,
      toptext: "Inspiring Powerful Actions on ",
      schoolname: true,
      main: false,
      bottext: "Positive behavioral supports is a behavior management system.",
      id: 2,
    },
    {
      name: "Bpis-global-enviroment",
      pic: slider4.src,
      toptext: "Nurturing Holistic Global Citizens",
      schoolname: false,
      main: false,
      bottext:
        "Understanding partnership team working and networking significance.",
      id: 3,
    },
  ];

  let window = useWindowDimensions();


  const clickHandler = (decider: number) => {
    let newItem = currentPhoto + decider;
    const max = photos.length - 1;
    if (newItem < 0) {
      newItem = max;
    }
    if (newItem > max) {
      newItem = 0;
    }
    setCurrentPhoto(newItem);
  };

  const currentPic: galleryItem = photos[currentPhoto];

  const transitions = useTransition(currentPic, {
    from: {
      opacity: 0,
      transform: "scale(1.1)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "scale(0.9)",
    },
    exitBeforeEnter: true,
  });

  return (
    <div className="col-span-full min-w-full h-[90vh] left-0">
      <div className="w-full h-full absolute top-0 left-0">
        {transitions((animation, props) => {
          return (
            <a.div
              key={props.id}
              style={{
                position: "relative",
                height: "90vh",
                width: "screen",
                ...animation,
              }}
            >
              <Image
                src={props.pic}
                alt={props.name}
                fill={true}
                className="object-cover h-[90vh] w-screen"
              />
            </a.div>
          );
        })}
      </div>
      <GalleryContent
        main={currentPic.main}
        toptext={currentPic.toptext}
        bottext={currentPic.bottext}
        schoolname={currentPic.schoolname}
        clicked={clickHandler}
      />
    </div>
  );
};

export default MainGallery;
