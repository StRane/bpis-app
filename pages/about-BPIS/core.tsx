import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Core: NextPage = () => {
  return (
    <>
      <Head>
        <title>BPIS Core Values</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Our Core Values" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Our Core Values" /><LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-medium	pb-3">Our Core Values</h3>
            <p className="pb-12">
              At BPIS we believe that being a well-rounded individual is as
              important as being good in academic success. Our values are
              principals and guidelines that assist us in steering our students
              towards a brighter future.
            </p>
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

export default Core;
