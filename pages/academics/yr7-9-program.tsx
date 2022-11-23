
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";
import { useRouter } from "next/router";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";
import { NextPage } from "next";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Yr7and9:NextPage = () => {
  const pageProps = useRouter();

  const pagePath = pageProps.route;

  return (
    <>
      <Head>
        <title>Year 7-9 Students</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Yr. 7-9 (Key Stage3)" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Yr. 7-9 (Key Stage3)" />
          <LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">Year 7-9</div>
          <SideInfos />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Yr7and9;
