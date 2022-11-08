import { HiPhone, HiMail } from "react-icons/hi";
import { HiMap } from "react-icons/hi2";

import Link from "next/link";

import Photo1 from "../../../images/footer/logo-footer.webp";

const Footer = () => {
  return (
    <div className="w-screen lg:px-10 py-14 grid grid-cols-1 lg:grid-cols-3 lg:space-y-2 lg:gap-9 translate-y-28 pl-3 bg-bpisb">
      <div className="col-span-1 leading-8 mb-5">
        <img
          className="mb-10 h-10 w-[153px] mx-auto md:mx-0 translate-y-4"
          src={Photo1.src}
          alt="BPIS secondary logo"
        />
        <p className="text-xs md:text-base leading-8 text-bpisgry2 tracking-wider">
          Burapa Pattanasart International School is &#x2018;A progressive
          School with an empowered student body&#x2019;.
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="text-sm md:text-lg leading-8 mb-10 text-white relative tracking-wider uppercase after:content-[''] after:w-10 after:bg-gray-400 after:h-[1px] after:absolute after:left-0 after:top-12">
          Social
        </h3>
        <ul className="grid grid-cols-3 md:grid-cols-2 tracking-wider leading-8 text-bpisgry2 text-xs lg:text-base pb-5">
          <li className="hover:text-bpisg transition-colors duration-200 ease-in">
            <Link
              href="https://www.facebook.com/BurapaPattanasart/"
              passHref
              legacyBehavior
            >
              <a target="_blank" aria-label="bpis facebook page">
                Facebook
              </a>
            </Link>
          </li>
          <li className="hover:text-bpisg transition-colors duration-200 ease-in">
            <Link
              href="https://www.instagram.com/burapa_international_school/"
              passHref
              legacyBehavior
            >
              <a target="_blank" aria-label="bpis instagram page">
                Instagram
              </a>
            </Link>
          </li>
          <li className="hover:text-bpisg transition-colors duration-200 ease-in">
            <Link
              href="https://twitter.com/bpisofficial?lang=en"
              passHref
              legacyBehavior
            >
              <a target="_blank" aria-label="bpis twitter page">
                Twitter
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-sm lg:text-lg leading-8 mb-10 text-white relative tracking-wider uppercase after:content-[''] after:w-10 after:bg-gray-400 after:h-[1px] after:absolute after:left-0 after:top-12">
          Connect Us
        </h3>
        <ul className="tracking-wider space-y-2 leading-8 text-bpisgry2 text-xs lg:text-base">
          <li className="flex items-center">
            <HiPhone className="h-3 w-3 mr-1 lg:h-6 lg:w-6" />
            <div className="flex flex-col items-center text-sm">
              <p>ADMIN (+66) 038-411-236</p>
              <p>FINANCE (+66) 038-411-235</p>
            </div>
          </li>
          <li className="flex items-center">
            <HiMail className="h-3 w-3 mr-1 lg:h-6 lg:w-6" />
            <Link href="mailto:theprincipal.bpis@gmail.com">
              <p>theprincipal.bpis@gmail.com</p>
            </Link>
          </li>
          <li className="flex items-start">
            <HiMap className="h-3 w-3 mr-1 translate-y-2 lg:-translate-y-1 lg:mr-2 lg:h-10 lg:w-10" />
            <p>
              253/17 Moo 13, Sukhumvit -Pattaya Alley 81, Nongprue, Banglamung,
              Chonburi, Thailand 20150
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
