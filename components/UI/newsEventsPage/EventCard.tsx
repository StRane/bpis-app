import Link from "next/link";

const EventCard: React.FC<{
  adress?: string;
  name?: string;
  day?: string;
  month?: string;
  title?: string;
  type: string;
  eventDetails?: string;
  id: number;
  directed?: boolean,
}> = (props) => {
  const displayedItems = (
    <div className="mb-24">
      <img className="w-full h-full" src={props.adress} alt={props.name} />
      <div className="w-full grid grid-cols-[6rem_1fr] divide-x-1 mt-7">
        <div className="flex flex-col text-bpisg font-medium">
          <div className="text-7xl">{props.day}</div>
          <div className="text-sm uppercase font-bold mt-1">{props.month}</div>
        </div>
        <div className="grid grid-rows-2 pl-7">
          <div className="font-medium text-3xl text-black hover:text-bpisg transition duration-300 ease-in">
            {props.title}
          </div>
          <div className="grid grid-cols-[8rem_8rem_1fr] divide-x-1 text-sm font-medium">
            <div className="justify-self-center">
              <h4>Posted by</h4>
              <p className="uppercase text-black/60">Admin</p>
            </div>
            <div className="pl-10">
              <h4>Categories</h4>
              <p className="uppercase text-black/60">{props.type}</p>
            </div>
          </div>
        </div>
      </div>
      {props.eventDetails && <p className="my-7">{props.eventDetails}</p>}
      {props.directed && <Link href={"/activities/" + props.id} key={props.id}>
        <button className="uppercase px-5 py-3 bg-bpisg text-white hover:bg-bpisg2 font-bold text-sm transition duration-300 ease-in">
          Read More
        </button>
      </Link>}
    </div>
  );

  return <li className="mx-4">{displayedItems}</li>;
};

export default EventCard;
