import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";

import NavBar from "../components/UI/navbar/navbar";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const SchoolMagazine: NextPage = () => {
  return (
    <>
      <Head>
        <title>School magazine page</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
      <Pagetitle name="school magazine" />
      <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
        <NavigationHelper name="School Magazine" />
        <div className="py-16 col-span-3 space-y-4">School Magazine</div>
        <SideInfos />
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SchoolMagazine;
