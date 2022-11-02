import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";

import NavBar from "../components/UI/navbar/navbar";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import GalleryContent from "../components/UI/newsEventsPage/GalleryContent";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery page</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Gallery" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
          <NavigationHelper name="Gallery" />
          <div className="py-16 col-span-4 grid grid-cols-4 gap-5 grid-rows-[19.25rem_19.25rem]">
            <GalleryContent />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Gallery;
