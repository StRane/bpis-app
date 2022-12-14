import Link from "next/link";
import Image from "next/image";
import ThaiFlag from "../../../images/flags/Thailand-Flag-icon.png";
import ChinaFlag from "../../../images/flags/China-Flag-icon.png";
import UKFlag from "../../../images/flags/United-Kingdom-flag-icon.png";
import IndiaFlag from "../../../images/flags/India-Flag-icon.png";
import PhFLag from "../../../images/flags/Philippines-Flag-icon.png";

const SocialMedia = () => {
  return (
    <div className="col-start-2 col-end-13 flex flex-row-reverse pt-2 pr-5 bg-bpisb place-content-between	">
      <div className="flex flex-row-reverse space-x-2">
        <Link
          href="https://www.facebook.com/BurapaPattanasart/"
          passHref
          legacyBehavior
        >
          <a target="_blank" aria-label="bpis facebook page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-white hover:fill-bpisg transition-colors duration-300 ml-1"
            >
              <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z" />
            </svg>
          </a>
        </Link>
        <Link
          href="https://twitter.com/BpisThailand?t=9iz0la-r25fImZcVBqRAaA&s=06"
          passHref
          legacyBehavior
        >
          <a target="_blank" aria-label="bpis twitter page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-6 h-6 fill-white hover:fill-bpisg transition-colors duration-300"
            >
              <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
            </svg>
          </a>
        </Link>
        <Link
          href="https://www.instagram.com/bpis_international/"
          passHref
          legacyBehavior
        >
          <a target="_blank" aria-label="bpis instagram page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-white hover:fill-bpisg transition-colors duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </Link>
      </div>
      <div className="flex ml-5 space-x-1 -translate-y-1">
        <div className="relative min-w-[32px] min-h-full align-top">
          <Image src={ThaiFlag.src} fill alt="Thailand FLag" />
        </div>
        <div className="relative min-w-[32px] min-h-full align-top">
          <Image src={UKFlag.src} fill alt="United Kingdom FLag" />
        </div>
        <div className="relative min-w-[32px] min-h-full align-top">
          <Image src={ChinaFlag.src} fill alt="China FLag" />
        </div>
        <div className="relative min-w-[32px] min-h-full align-top">
          <Image src={IndiaFlag.src} fill alt="India FLag" />
        </div>
        <div className="relative min-w-[32px] min-h-full align-top">
          <Image src={PhFLag.src} fill alt="Philippines FLag" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
