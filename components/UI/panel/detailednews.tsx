import GalleryContent from "../newsEventsPage/GalleryContent";

const DetailedNews = () => {
  return (
    <>
      <div className="col-span-12 grid grid-cols-5 divide-x-1 divide-dashed divide-bpisgry2 pt-28">
        <div className="col-span-1 text-left">
          <p className="text-base text-bpisgry">ALL BPIS, ALL THE TIME</p>
          <h4 className="text-4xl font-semibold">Explore BPIS</h4>
        </div>
        <div className="col-span-1">
          <p className="text-6xl font-bold">24</p>
          <p className="text-xl font-normal uppercase">Hours</p>
        </div>
        <div className="col-span-3 text-lg text-bpisgry pl-10 text-left">
          There&#8217;s always something amazing happening at Chonburi. Whether
          it&#8217;s on school or around the world, our students, faculty, staff
          and alumni are out seizing the day as shown in the slideshow below
          suspendisse potenti.
        </div>
      </div>
      <div className="col-span-12 h-56 pt-5 mb-60 grid grid-cols-6 gap-3"><GalleryContent/></div>
    </>
  );
};

export default DetailedNews;
