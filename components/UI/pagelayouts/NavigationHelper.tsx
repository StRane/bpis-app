import Link from "next/link";

const NavigationHelper: React.FC<{name: string}> = (props) => {
  return (
    <ul className="col-span-4 flex border-b-[1px] border-solid">
      <li>
        <Link
          href="/"
          className="text-bpisgry hover:text-bpisg text-lg text-left mr-7"
        >
          Home
        </Link>
      </li>
      <li>{props.name}</li>
    </ul>
  );
};

export default NavigationHelper;
