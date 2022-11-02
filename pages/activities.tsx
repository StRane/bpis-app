import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";
import NavBar from "../components/UI/navbar/navbar";

import { useContext } from "react";

import MediaContext from "../store/media-context";
import EventCard from "../components/UI/newsEventsPage/EventCard";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper"

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const Activities: NextPage = () => {
  const mediaCtx = useContext(MediaContext);

  const events = mediaCtx.activities;

  const displayedItems = (
    <ul>
      {events.map((item) => (
        <EventCard
          name={item.name}
          adress={item.adress}
          day={item.day}
          month={item.month}
          title={item.title}
          type="Activities"
          id={item.id}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Head>
        <title>Activities page</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar/>
        <Pagetitle name="Activities" />
      <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
        <NavigationHelper name="Activities" />
        <div className="py-16 col-span-3 space-y-4 mx-4">{displayedItems}</div>
        <SideInfos />
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Activities;
