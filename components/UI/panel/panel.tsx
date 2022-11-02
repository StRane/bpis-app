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
      adress: "/21st-century-learners",
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
      <button
        key={`panel_${panelitems[0].name}`}
        className="col-span-1 grid grid-cols-[3rem_minmax(5px,_1fr)] group content-center ml-5 -top-5"
      >
        <HiOutlineAcademicCap className="h-7 w-7 md:h-11 md:w-11 stroke-0 stroke-bpisgry align-center group-hover:stroke-bpisg" />
        <div className="md:ml-3 flex flex-col text-left self-start">
          <ul>
            <Link
              href={panelitems[0].adress}
              className="group-hover:text-bpisg text-xs lg:text-lg font-normal uppercase"
            >
              {panelitems[0].name}
            </Link>
            <li className="text-xs font-light text-bpisgry">{panelitems[0].subname}</li>
          </ul>
        </div>
      </button>
      <button
        key={`panel_${panelitems[1].name}`}
        className="col-span-1 grid grid-cols-[3rem_minmax(5px,_1fr)] group content-center ml-5 -top-5"
      >
        <HiOutlineClipboardList className="h-7 w-7 md:h-11 md:w-11 stroke-bpisgry stroke-0 align-center group-hover:stroke-bpisg" />
        <div className="md:ml-3 flex flex-col text-left self-start">
          <ul>
            <Link
              href={panelitems[1].adress}
              className="group-hover:text-bpisg text-lg font-normal uppercase"
            >
              {panelitems[1].name}
            </Link>
            <li className="font-light text-bpisgry">{panelitems[1].subname}</li>
          </ul>
        </div>
      </button>
      <button
        key={`panel_${panelitems[2].name}`}
        className="col-span-1 grid grid-cols-[3rem_minmax(5px,_1fr)] group content-center ml-5 -top-5"
      >
        <HiOutlineMap className="h-7 w-7 md:h-11 md:w-11 stroke-0 stroke-bpisgry align-center group-hover:stroke-bpisg" />
        <div className="md:ml-3 flex flex-col text-left self-start">
          <ul>
            <Link
              href={panelitems[2].adress}
              className="group-hover:text-bpisg text-lg font-normal uppercase"
            >
              {panelitems[2].name}
            </Link>
            <li className="font-light text-bpisgry">{panelitems[2].subname}</li>
          </ul>
        </div>
      </button>
    </>
  );

  return (
    <div className="col-start-1 col-end-13 grid grid-cols-4 -translate-y-14 bg-bpisb my-auto text-white mb-32">
      {menuitems}
      <button className="col-span-1 bg-bpisg text-white text-left pt-9 pr-5 pb-8 relative md:before:content-[''] md:before:h-full before:absolute before:bg-bpisg before:w-[4.6rem] before:top-0 before:-skew-x-12 before:translate-x-5 before:-left-20 flex before:block group">
        <div className="ml-4 w-3/4 flex flex-col text-left -top-5 after:content-[''] after:w-[1px] after:h-12 after:top-10 after:left-[70%] after:bg-white after:absolute">
          <ul>
            <Link
              href="/contact-us"
              className="text-lg font-normal uppercase group-hover:text-bpisb"
            >
              Discover BPIS
            </Link>
            <li className="font-light">Don't Hesitate to Ask</li>
          </ul>
        </div>
        <HiArrowNarrowRight className="h-8 w-8 stroke-white self-center group-hover:stroke-bpisb" />
      </button>
    </div>
  );
};

export default Panel;
