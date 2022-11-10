import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";

import NavBar from "../components/UI/navbar/navbar";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const Yr12and13: NextPage = () => {
  return (
    <>
      <Head>
        <title>Year 12-13 Students</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
      <Pagetitle name="Yr. 12-13 (A level)" />
      <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
        <NavigationHelper name="Yr. 12-13 (A level)" />
        <div className="py-16 col-span-3 space-y-4">
          A level
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

export default Yr12and13;
