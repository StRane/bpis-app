import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";

import NavBar from "../components/UI/navbar/navbar";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const Vision: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our vision page</title>
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="our vision and mission" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
          <NavigationHelper name="Our History" />
          <div className="py-16 col-span-3 space-y-4">
            <h3 className="text-2xl font-medium	pb-3">Our Vision</h3>
            <p className="pb-20">
              Burapa Pattanasart International School (B.P.I.S) is committed to
              nurturing future citizens with essential knowledge and skills to
              engage in a worldwide community.
            </p>
            <h3 className="text-2xl font-medium	pt-16 pb-3">Our Mission</h3>
            <p>
              We promote our students to be emotionally and academically well –
              rounded individuals who are creative and independent.
            </p>
            <p className="pb-20">
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
