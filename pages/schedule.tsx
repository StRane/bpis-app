import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/UI/footer/Footer";
import NavBar from "../components/UI/navbar/navbar";
import S1 from "../images/schedule/2022_1.jpg";
import S2 from "../images/schedule/2022_2.jpg";
import Image from "next/image";

import NavigationHelper from "../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../components/UI/pagelayouts/Pagetitle";

const Schedule: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schedule Page</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
        <meta name="description" content="school Schedule page" />
        <meta name="google-site-verification" content="2PT_SiS4V8WxhGd5NNYI3N7ofhzVPXWhCuu1tjsSwG0" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="Schedule" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-4 gap-9">
          <NavigationHelper name="Schedule" />
          <div className="py-16 col-span-4 md:col-span-3 space-y-4">
            <div className="relative min-w-full h-screen lg:min-h-[125vh] xl:min-h-[150vh]">
              <Image
                src={S1.src}
                fill
                className="object-contain"
                alt="schedule part 1"
              />
            </div>
            <div className="relative min-w-full min-h-screen lg:min-h-[125vh] xl:min-h-[150vh]">
              <Image
                src={S2.src}
                fill
                className="object-contain"
                alt="schedule part 2"
              />
            </div>
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

export default Schedule;
