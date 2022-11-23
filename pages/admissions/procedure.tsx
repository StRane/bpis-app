import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";
import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Procedure: NextPage = () => {
  return (
    <>
      <Head>
        <title>Application Procedure</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="procedure" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Procedure" />
          <LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            Procedure
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

export default Procedure;
