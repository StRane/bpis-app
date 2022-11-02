import { useContext } from "react";

import MediaContext from "../../../store/media-context";

import imageEvent from "../../../images/main_gallery/21stcreative2.webp";

const Events = () => {
  const mediCtx = useContext(MediaContext);
  const activities = mediCtx.activities!.slice(0, 2);

  const eventsGallery = (
    <div className="grid grid-cols-2 grid-rows-2 mr-5 h-72 sm:px-5 md:px-40 lg:px-0
 lg:h-[24.625rem] overflow-clip text-left">
     <img className="h-full w-full object-cover" src={activities[0].adresssm} />
      <div className="bg-white pl-7 flex flex-col justify-center text-bpisgry text-sm">
        <p >
          {activities[0].day}
          {activities[0].month}, 2019
        </p>
        <h5 className="text-black font-medium tracking-wide	text-lg mb-2 lg:mb-7">
          {activities[0].title}
        </h5>
        <p className="text-black">Read More</p>
      </div>
      <div className="bg-bpisg flex flex-col justify-center pl-7">
        <p className="text-white/40 text-sm">
          {activities[1].day}
          {activities[1].month}, 2019
        </p>
        <h5 className="text-white font-medium tracking-wide	text-lg mb-2 lg:mb-7">
          {activities[1].title}
        </h5>
        <p className="text-white">Read More</p>
      </div>
      <img className="h-full w-full object-cover" src={activities[1].adresssm} />
    </div>
  );

  return (
    <div
      className="col-span-12 w-screen h-screen lg:-inset-x-10 items-center grid grid-cols-1 lg:grid-cols-2 divide-y-1 lg:divide-y-0 lg:divide-x-1 divide-dashed divide-bpisgry2 bg-cover  bg-center before:content-[''] before:absolute relative before:h-full before:w-screen before:left-0 before:top-0 before:bg-bpisshdw before:bg-cover"
      style={{ backgroundImage: `url(${imageEvent.src})` }}
    >
      <div className="col-span-1 lg:mx-28 my-auto z-10">
        <div className="lg:ml-10 mt-5">
          <h3 className="text-bpisg font-medium text-lg lg:text-xl uppercase mb-5 lg:mb-10">
            the principal message
          </h3>
          <p className="text-bpisgry2 text-sm lg:text-lg mb-4 lg:mb-8">
            Be inspired to become 21st century thinkers. Burapa Pattanasart
            International School is &#8216;A progressive School with an
            empowered student body.&#8217;
          </p>
          <p className="text-bpisgry2 text-sm lg:text-lg mb-4 lg:mb-8">
            We are diverse, welcoming, accepting and passionate about being the
            best we can be. Join us to make your college experience
            unforgettable.
          </p>
          <h1 className="text-blue-700 text-sm lg:text-lg mb-3">BPIS</h1>
        </div>
      </div>
      <div className="col-span-1 z-10 pt-5
       lg:p-10">
        <h3 className="text-white text-center lg:text-left font-bold tracking-wide text-lg lg:text-4xl pb-8">
          New <span className="text-bpisg">Events</span>
        </h3>
        {eventsGallery}
      </div>
    </div>
  );
};

export default Events;