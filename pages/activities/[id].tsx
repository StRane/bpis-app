import type { NextPage } from "next";
import Router from "next/router";

import { useContext } from "react";

import MediaContext from "../../store/media-context";

import { useRouter } from "next/router";

import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";
import EventCard from "../../components/UI/newsEventsPage/EventCard";
import Custom404 from "../404";

const Details: NextPage = () => {
  const pageProps = useRouter();
  const pageNumber = pageProps.query!.id;

  if (!pageNumber) {
    Router.push('404');
    return null
  }

  const mediaCtx = useContext(MediaContext);

  const currActivity = mediaCtx.activities.find(
    (item) => item.id === +pageNumber
  );

  if (!currActivity) {
    Router.push('404')
    return null;
  }

  return (
    <>
      <Head>
        <title>Activity {currActivity.id}</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name={"Details" + currActivity.id} />

        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
          <NavigationHelper name="Details" />
          <div className="py-16 col-span-4 space-y-4 list-none">
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
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Details;
