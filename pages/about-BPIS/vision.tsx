import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const Vision: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Vision</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Our Vision and Mission" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Our Vision and Mission" /><LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-medium	pb-3">Our Motto</h3>
            <p className="pb-12">
              A Health & Balanced Understanding of the World
            </p>
            <h3 className="text-2xl font-medium	pb-3">Our Vision</h3>
            <p>
            We, at BPIS, promote our students to be emotionally and academically well-rounded individuals, who are creative and independent.
            </p>
            <p>
            It is our objective to teach students to be critical thinkers and valuable members of an International Society.
            </p>
            <p className="pb-12">“Be the Change, you want to see in the World.” – Mahatma Gandhi</p>
            <h3 className="text-2xl font-medium pb-3">Our Mission</h3>
            <p>
              We promote our students to be emotionally and academically well –
              rounded individuals who are creative and independent.
            </p>
            <p className="pb-12">
              It is our objective to teach our students to be critical thinkers
              and valuable members of an international society.
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

export default Vision;
