import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";
import NavBar from "../../components/UI/navbar/navbar";
import Image from "next/image";


import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper"

import Image1 from "../../images/career/biologyteacher.webp";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Achievements: NextPage = () => {
  return (
    <>
      <Head>
        <title>Achievements</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
      <NavBar />
        <Pagetitle name="achievements" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Achievements" />
          <LeftSideBar />
          <div className="p-2 sm:p-16 col-span-4 lg:col-span-2 space-y-4" >
            <Image src={Image1} alt="Biology Teacher Wanted" />
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

export default Achievements;
