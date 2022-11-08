import Link from "next/link";

import {
  HiOutlineMap,
  HiOutlineAcademicCap,
  HiOutlineClipboardList,
  HiArrowNarrowRight,
} from "react-icons/hi";

const Panel = () => {
  const panelitems = [
    {
      name: "Programs",
      subname: "21st Century Learners",
      adress: "/vision",
    },
    {
      name: "Achievements",
      subname: "Academic success",
      adress: "/achievements",
    },
    {
      name: "Education Fees",
      subname: "School Fees",
      adress: "/school-fees",
    },
  ];

  const menuitems = (
    <>
      <Link
        href={panelitems[0].adress}
        key={`panel_${panelitems[0].name}`}
        className=" group-hover:text-bpisg text-xs lg:text-lg items-center translate-x-3 lg:translate-x-0 content-center font-normal uppercase"
      >
        <button
          key={`panel_${panelitems[0].name}`}
          className="col-span-1 grid grid-cols-[3rem_minmax(5px,_1fr)] h-full group content-center lg:ml-5 lg:top-5 w-full"
        >
          <HiOutlineAcademicCap className="h-7 w-7 md:h-11 md:w-11 stroke-0 stroke-bpisgry align-center group-hover:stroke-bpisg" />
          <div className="md:ml-3 flex flex-col text-left self-start">
            <ul>
              <li className="group-hover:text-bpisg">{panelitems[0].name}</li>
              <li className="font-light text-bpisgry">
                {panelitems[0].subname}
              </li>
            </ul>
          </div>
        </button>
      </Link>
      <Link
        href={panelitems[1].adress}
        key={`panel_${panelitems[1].name}`}
        className=" group-hover:text-bpisg text-xs  translate-x-0.5 lg:translate-x-0 lg:text-lg font-normal uppercase"
      >
        <button
          key={`panel_${panelitems[1].name}`}
          className="col-span-1 grid grid-cols-[3rem_minmax(5px,_1fr)] h-full group content-center lg:ml-5 top-5 w-full"
        >
          <HiOutlineClipboardList className="h-7 w-7 md:h-11 md:w-11 stroke-0 stroke-bpisgry align-center group-hover:stroke-bpisg" />
          <div className="md:ml-3 flex flex-col text-left self-start">
            <ul>
            <li className="group-hover:text-bpisg">{panelitems[1].name}</li>
              <li className="font-light text-bpisgry">
                {panelitems[1].subname}
              </li>
            </ul>
          </div>
        </button>
      </Link>
      <Link
        href={panelitems[2].adress}
        key={`panel_${panelitems[2].name}`}
        className=" group-hover:text-bpisg text-xs  -translate-x-0.5 lg:translate-x-0 lg:text-lg font-normal uppercase"
      >
        <button
          key={`panel_${panelitems[2].name}`}
          className="col-span-1 h-full grid grid-cols-[3rem_minmax(5px,_1fr)] group content-center lg:ml-5 top-5 w-full"
        >
          <HiOutlineMap className="h-7 w-7 md:h-11 md:w-11 stroke-0 stroke-bpisgry align-center group-hover:stroke-bpisg" />
          <div className="md:ml-3 flex flex-col text-left self-start">
            <ul>
            <li className="group-hover:text-bpisg">{panelitems[2].name}</li>
              <li className="font-light text-bpisgry">
                {panelitems[2].subname}
              </li>
            </ul>
          </div>
        </button>
      </Link>
    </>
  );

  return (
    <div className="col-span-12 grid grid-col-1 place-content-stretch lg:grid-cols-4 md:-left-10 translate-y-0 lg:-translate-y-14 bg-bpisb my-5 text-white mb-32 justify-items-center">
      {menuitems}
      <Link
        href="/contact-us"
        className="col-span-1 w-full bg-bpisg text-white text-center lg:text-left p-0 lg:pt-9 lg:pr-5 lg:pb-8 relative md:before:content-[''] md:before:h-full before:absolute before:bg-bpisg lg:before:w-[4.6rem] before:top-0 before:-skew-x-12 before:translate-x-5 before:-left-20 flex before:block group text-xs lg:text-lg font-normal uppercase group-hover:text-bpisb"
      >
        <div className="mx-auto lg:ml-4 lg:w-3/4 flex flex-col text-left top-0 lg:-top-5 after:content-[''] after:w-[1px] after:h-12 after:top-10 after:left-[70%] after:bg-white after:absolute">
          <ul>
            <li>Discover BPIS</li>
            <li className="font-light">Don't Hesitate to Ask</li>
          </ul>
        </div>
        <HiArrowNarrowRight className="hidden lg:block h-8 w-8 stroke-white self-center group-hover:stroke-bpisb" />
      </Link>
    </div>
  );
};

export default Panel;
