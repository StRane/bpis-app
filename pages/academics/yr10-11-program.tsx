import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";
import { useRouter } from "next/router";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Yr10and11: NextPage = () => {
  const pageProps = useRouter();

  const pagePath = pageProps.route;
  return (
    <>
      <Head>
        <title>Year 10-11 Students</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Yr. 10-11 (IGCSE)" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Yr. 10-11 (IGCSE)" />
          <LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            Year 10-11
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

export default Yr10and11;
