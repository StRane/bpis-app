import type { NextPage } from "next";

import { useContext, useEffect } from "react";

import MediaContext from "../../store/media-context";

import { useRouter } from "next/router";

import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";
import EventCard from "../../components/UI/newsEventsPage/EventCard";

const Details = () => {
  const pageProps = useRouter();
  const pageNumber = pageProps.query!.id;

  if (!pageNumber) {
    return console.log("there is an error in your page navigation");
  }

  const mediaCtx = useContext(MediaContext);

  const currActivity = mediaCtx.activities.find(
    (item) => item.id === +pageNumber
  );

  if (!currActivity) {
    return console.log("there is an error in your activity fetch");
  }

  return (
    <>
      <Head>
        <title>Activity {currActivity.id}</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name={"Details" + currActivity.id} />

        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
          <NavigationHelper name="Details" />
          <div className="py-16 col-span-3 space-y-4 list-none">
            <EventCard
              name={currActivity.name}
              adress={currActivity.adress}
              day={currActivity.day}
              month={currActivity.month}
              title={currActivity.title}
              type="Activities"
              id={currActivity.id}
              eventDetails={currActivity.eventDetails}
              directed={false}
            />
          </div>

          <SideInfos />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Details;
