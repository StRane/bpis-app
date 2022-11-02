import { useContext } from "react";

import MediaContext from "../../../store/media-context";

const SideInfos = () => {
  const mediaCtx = useContext(MediaContext);

  const sideNews = mediaCtx.activities.slice(0, 3);

  const sidePosts = (
    <ul>
      {sideNews.map((item) => (
        <li className="h-24 mb-8 flex">
          <img
            className="w-24 h-24 object-cover mr-6"
            src={item.adresssm}
            alt={item.title}
          />
          <div className="flex flex-col text-sm font-bold pr-8">
            <h5 className="mb-5">{item.title}</h5>
            <p className="text-bpisgry">{item.day} {item.month} 2019</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="col-span-1 py-16">
      <div className="text-lg font-semibold text-black uppercase">
        <h3 className="relative pl-4 mb-2 before:content-[''] before:w-[2px] before:h-10 before:left-0 before:-top-1 before:bg-bpisg before:absolute before:mr-6">
          News
        </h3>
        <ul className="relative mt-4 font-normal text-base pl-4 space-y-2 before:content-[''] before:w-[1px] before:h-20 before:left-0 before:-top-4 before:bg-bpisgry2 before:absolute before:mr-6 mb-8">
          <li>Events</li>
          <li>News</li>
        </ul>
      </div>
      <div className="text-lg font-semibold text-black">
        <h3 className="relative uppercase pl-4 mb-2 before:content-[''] before:w-[2px] before:h-10 before:left-0 before:-top-1 before:bg-bpisg before:absolute before:mr-6">
          Latest Posts
        </h3>
        <ul className="relative mt-4 font-normal text-base pl-4 space-y-2 before:content-[''] before:w-[1px] before:h-20 before:left-0 before:-top-4 before:bg-bpisgry2 before:absolute before:mr-6 mb-8">
          {sidePosts}
        </ul>
      </div>
    </div>
  );
};

export default SideInfos;
