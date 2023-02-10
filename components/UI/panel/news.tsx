import { useState, useContext } from "react";

import Link from "next/link";

import MediaContext from "../../../store/media-context";

import { HiOutlineCalendar } from "react-icons/hi";

import Image1 from "../../../images/youtube/youtubepic.jpg";

const News = () => {
  const mediCtx = useContext(MediaContext);
  const latestNews = mediCtx.activities!.slice(0, 3);

  const [shown, seShown] = useState(false);

  const clickHandler = () => {
    seShown(!shown);
  };

  const newsBoard = (
    <ul className="divide-y text-left">
      {latestNews.map((item) => (
        <li key={item.id} className="mb-7 pt-7 ml-5 lg:ml-0">
          <Link
            href={"/activities/" + item.id}
            key={item.id}
            className="mb-7 pt-7"
          >
            <h5 className="text-black hover:text-bpisg text-lg font-normal transition-colors duration-300 mb-2">
              {item.title}
            </h5>
            <div className="flex text-bpisgry">
              <HiOutlineCalendar className="h-5 w-5 mr-4 self-center" />
              <p>
                {item.month} {item.day}, {item.year}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="col-start-1 col-end-13 grid grid-cols-1 self-center lg:grid-cols-8 gap-6 mb-48">
      <div className="col-span-3 mb-8 px-5">
        <h3 className="mb-7 text-4xl font-semibold text-left">
          Upcoming Events at <span className="text-bpisgcontrast">BPIS</span>
        </h3>
        <ul className="marker:text-bpisg list-decimal pl-5">
          <li className="text-lg mb-4  leading-7 text-left">Mid Term Break</li>
          <div className="text-md font-normal space-y-1 marker:text-bpisg leading-7 text-left mb-10 text-bpisgry">
            <p>The school will be closed from Mon,13th to Fri,17th Feb February.</p>
          </div>
          <li className="text-lg mb-4  leading-7 text-left">
            Teacher's Day 16th January 2023
          </li>
          <div className="text-md font-normal space-y-1 leading-7 text-left mb-10 text-bpisgry">
            <p>
              The school will be closed on the 16th January in celebration of
              Teacher's Day.
            </p>
          </div>
        </ul>
        <Link href="/schedule" className="w-full h-full">
          <button
            aria-label="opan calendar page"
            className="items-center text-base w-1/2 h-12 self-center leading-10 justify-self-center font-normal uppercase border-solid border rounded-3xl hover:text-white bg-bpisg hover:bg-bpisg2 hover:border-bpisg2"
          >
            Schedule
          </button>
        </Link>
      </div>

      <div className="col-span-2 self-center obj">
        {shown ? (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/90"
            onClick={clickHandler}
          >
            <iframe
              className="fixed w-2/5 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              src="https://www.youtube.com/embed/pZrMOBOpYVk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <div className="relative object-cover">
            <button
              aria-label="open school introduction video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bpisg/80 rounded-full p-5 hover:bg-bpisg transition-colors duration-300"
              onClick={clickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-white translate-x-0.5"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <img className="w-full" src={Image1.src} alt="Youtube video" />
          </div>
        )}
      </div>
      <div className="col-span-3 mb-8">
        <h3 className="tracking-wide font-semibold text-4xl pb-3">
          Latest
          <span className="text-bpisgcontrast"> News</span>
        </h3>
        {newsBoard}
      </div>
    </div>
  );
};

export default News;
