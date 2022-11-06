import { useState, useContext } from "react";

import Link from "next/link";

import MediaContext from "../../../store/media-context";

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
        <li key={item.id} className="mb-7 pt-7">
          <h5 className="text-black hover:text-bpisg text-lg font-normal transition-colors duration-300 mb-2">
            {item.title}
          </h5>
          <div className="flex text-bpisgry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-4 self-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>
              {item.month} {item.day}, 2019
            </p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="col-start-1 col-end-13 grid grid-cols-1 self-center lg:grid-cols-3 gap-6 mb-48">
      <div className="col-span-1 mb-8 px-5">
        <h3 className="mb-7 text-4xl font-semibold pb-4 text-left">
          Final Exams <span className="text-bpisgcontrast">Term 2</span>
        </h3>
        <p className="text-lg mb-4 text-bpisgry leading-7 text-left">
          In order for a student to sit for final examinations, he/she must be
          in good standing.
        </p>
        <ul className="list-disc list-inside text-lg font-normal space-y-1 marker:text-bpisg leading-7 text-left mb-10">
          <li>Monday, 22 April 2019</li>
          <li>9am &#8211; 4pm</li>
          <li>Burapa Pattanasart International School</li>
        </ul>
        <button aria-label="opan calendar page" className="items-center text-base w-1/2 h-12 self-center leading-10 justify-self-center font-normal uppercase border-solid border rounded-3xl hover:text-white bg-bpisg hover:bg-bpisg2 hover:border-bpisg2">
          <Link href="/calendar">Read more</Link>
        </button>
      </div>

      <div className="col-span-1 self-center">
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
          <div className="relative">
            <button aria-label="open school introduction video" 
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
            <img className="mx-auto lg:mx-0" src={Image1.src} alt="Youtube video" />
          </div>
        )}
      </div>
      <div className="col-span-1 mb-8">
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
