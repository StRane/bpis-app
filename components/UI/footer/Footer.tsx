import Photo1 from "../../../images/footer/logo-footer.webp";

const Footer = () => {
  return (
    <div className="w-screen lg:px-10 py-14 -translate-x-10 grid grid-cols-3 space-y-2 gap-9 translate-y-28 bg-bpisb">
      <div className="col-span-1 leading-8 mb-5">
        <img
          className="mb-10 h-10 w-[153px] translate-y-4"
          src={Photo1.src}
          alt="BPIS secondary logo"
        />
        <p className="text-base leading-8 text-bpisgry2 tracking-wider">
          Burapa Pattanasart International School is &#x2018;A progressive
          School with an empowered student body&#x2019;.
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="text-lg leading-8 mb-10 text-white relative tracking-wider uppercase after:content-[''] after:w-10 after:bg-gray-400 after:h-[1px] after:absolute after:left-0 after:top-12">
          Social
        </h3>
        <ul className="grid grid-cols-2 tracking-wider leading-8 text-bpisgry2">
          <li>Facebook</li>
          <li>Line</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-lg leading-8 mb-10 text-white relative tracking-wider uppercase after:content-[''] after:w-10 after:bg-gray-400 after:h-[1px] after:absolute after:left-0 after:top-12">
          Connect Us
        </h3>
        <ul className="tracking-wider leading-8 text-bpisgry2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <p>ADMIN (+66) 038-411-236</p>
            <p>FINANCE (+66) 038-411-235</p>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <p>theprincipal.bpis@gmail.com</p>
          </li>
          <li className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mr-4"
            >
              <path
                fillRule="evenodd"
                d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                clipRule="evenodd"
              />
            </svg>
            <p>253/17 Moo 13, Sukhumvit -Pattaya Alley 81,  Nongprue, Banglamung, Chonburi, Thailand 20150</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
