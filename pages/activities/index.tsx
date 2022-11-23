import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";
import NavBar from "../../components/UI/navbar/navbar";

import { useContext } from "react";

import MediaContext from "../../store/media-context";
import EventCard from "../../components/UI/newsEventsPage/EventCard";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper"

import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

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
          eventDetails={item?.eventDetails}
          id={item.id}
          directed={true}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Head>
        <title>Activities</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar/>
        <Pagetitle name="Activities" />
      <div className="my-4 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
        <NavigationHelper name="Activities" />
        <div className="py-16 col-span-4 space-y-4 md:mx-4">{displayedItems}</div>
      </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Activities;
