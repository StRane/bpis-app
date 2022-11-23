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
        <title>Gallery</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Gallery" />
        <div className="col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4">
          <NavigationHelper name="Gallery" />
          <div
            className='col-span-12 pt-5 mb-60 md:mb-10 grid lg:gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen w-screen'
          >
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
