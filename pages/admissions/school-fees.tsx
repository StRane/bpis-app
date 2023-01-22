import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/UI/footer/Footer";

import NavBar from "../../components/UI/navbar/navbar";

import NavigationHelper from "../../components/UI/pagelayouts/NavigationHelper";

import SideInfos from "../../components/UI/pagelayouts/SideInfos";
import Pagetitle from "../../components/UI/pagelayouts/Pagetitle";

import LeftSideBar from "../../components/UI/pagelayouts/LeftSideBar";

const SchoolFees: NextPage = () => {
  const feeAmounts = [
    {
      Year: 7,
      Amount: 63000,
    },
    {
      Year: 8,
      Amount: 63000,
    },
    {
      Year: 9,
      Amount: 63000,
    },
    {
      Year: 10,
      Amount: 63000,
    },
    {
      Year: 11,
      Amount: 78750,
    },
    {
      Year: 12,
      Amount: 78750,
    },
    {
      Year: 13,
      Amount: 78750,
    },
  ];

  const fees = (
    <ul className="mx-auto w-full sm:w-1/2 lg:w-1/3 border-2 border-black text-center divide-y-2 divide-black">
      <div className="grid grid-cols-2 h-10 items-center divide-x-1 text-xl font-medium text-black">
        <li>Level</li>
        <li>Fees/Term</li>
      </div>
      {feeAmounts.map((e) => (
        <div className="grid grid-cols-2 h-10 items-center divide-x-1 text-xl font-medium text-black">
          <li>Year {e.Year}</li>
          <li>{e.Amount}</li>
        </div>
      ))}
    </ul>
  );

  const instructions = (
    <div className="text-xl font-medium text-black lg:ml-10">
      <ul className="space-y-4">
        <li className="pb-8">There are 3 Terms per School Year.</li>
        <li>Following are the additional charges for new admissions only:</li>
        <li>Application fees:  200 &#3647;</li>
        <li>Registration fees:  30,000 &#3647;</li>
        <li>Insurance fees:  1,200 &#3647;</li>
      </ul>
    </div>
  );

  return (
    <>
      <Head>
        <title>School Fees</title>
        <link rel="icon" href="/bpis_logo.ico" />
        <html lang="en" />
      </Head>
      <main>
        <NavBar />
        <Pagetitle name="school fees" />
        <div className="m-4 col-start-1 col-span-12 text-left text-lg text-bpisgry font-light grid grid-cols-[3fr_4fr_4fr_4fr] gap-4">
          <NavigationHelper name="School Fees" />
          <LeftSideBar />
          <div className="py-16 col-span-4 lg:col-span-2 space-y-4">
            {fees}
            {instructions}
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

export default SchoolFees;
