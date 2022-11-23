import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import image1 from '../../images/history_page/bpis_drone.webp'

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const History: NextPage = () => {
  return (
    <>
      <Head>
        <title>History of BPIS</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="our history" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="Our History" /><LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            <p>
              BPIS developed out of the established English/Bi-lingual
              (Thai-English) programme of Burapa English Programme School of
              Thailand (BEST) which has been operating for over 20 years.
            </p>
            <p>
              BPIS established a secondary education structure founded on the UK
              National Curriculum (Key Stages 3-5 or Year 7-13) and initiated
              the process of establishing itself as an educational facility and
              received the licence as a new International School on March 9th
              2018. It commenced the first academic year on August 20th 2018.
            </p>
            <div className="relative min-w-full min-h-[400px] lg:min-h-[600px]">
            <Image src={image1.src} fill alt="BPIS school drone image" className="object-contain"/>
            </div>
            <p>
              BPIS is a young International School proud of the collaborative
              work between the Student Council Members and the Academic Team,
              for it provides an opportunity for the students to share in the
              decision-making process for the welfare of the school. We have an
              international mindset and adhere to a policy of equal
              opportunities constantly working to eradicate all forms of
              discrimination.
            </p>
            <p>
              In line with the policies of the National Economics and Social
              Development Board of 2015, by which time Thailand had become a
              leading member of the ASEAN Economic Community – a significant
              project to drive Thai economic and industrial expansion in the
              Eastern Seaboard Area, the School Board of Directors unanimously
              agreed to establish an International School to support South
              Pattaya location where there was a growing community of foreign
              families.
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

export default History;
