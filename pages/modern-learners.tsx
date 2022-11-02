import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";

import NavBar from "../components/UI/navbar/navbar";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const ModernLearners: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modern learners page</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
      <Pagetitle name="21st Century Learners" />
      <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
        <NavigationHelper name="21st Century Learners" />
        <div className="py-16 col-span-3 space-y-4">
          Learners
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

export default ModernLearners;
