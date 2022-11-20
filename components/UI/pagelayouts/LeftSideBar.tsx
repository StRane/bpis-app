import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import MediaContext from "../../../store/media-context";

interface Props {
  academics?: boolean;
}

type menuitem = {
  name?: string;
  id?: number;
  hovering?: boolean;
  submenu?: { title: string; adress: string }[];
  target?: string;
};

function LeftSideBar({ academics }: Props) {
  const pageProps = useRouter();

  const pagePath = pageProps.route;

  const mediCtx = useContext(MediaContext);

  let menuValues: menuitem | undefined = {};
  if (academics) {
    menuValues = mediCtx.menuitem[2];
  } else {
    menuValues = mediCtx.menuitem.find((item) =>
      item.submenu!.find((item) => item.adress === pagePath)
    );
  }

  const menuItems = (
    <ul className="w-full text-xl text-center  hidden lg:block">
      {menuValues!.target ? (
        <Link scroll={false} href={menuValues!.target}>
          <li className="transition-color bg-bpisg2 duration-200 ease-in hover:bg-bpisg h-16">
            <p className="translate-y-1/2">{menuValues!.name}</p>
          </li>
        </Link>
      ) : (
        <li className="bg-bpisg2 h-16">
          <p className="translate-y-1/2">{menuValues!.name}</p>
        </li>
      )}
      {menuValues!.submenu!.map((item) => (
        <Link scroll={false} href={item.adress}>
          <li className="transition-color duration-200 ease-in hover:bg-bpisg h-10">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );

  return (
    <div className="h-full bg-bpisb text-white -translate-x-4 -translate-y-4 w-full">
      {menuItems}
    </div>
  );
}

export default LeftSideBar;
