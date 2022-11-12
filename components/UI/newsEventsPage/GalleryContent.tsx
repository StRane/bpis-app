import { useContext } from "react";

import Link from "next/link";

import MediaContext from "../../../store/media-context";

interface Props{
  main?: boolean
}

const GalleryContent = ({main}: Props) => {
  const mediCtx = useContext(MediaContext);

  const activities = mediCtx.activities;

  const mediaContent = main? [...activities].slice(1,7): [...activities];


  const gallery = mediaContent.map((item) => (

    <Link href={"/activities/" + item.id} key={item.id}
      className="col-span-1 before:content-[''] before:absolute relative before:max-w-screen bg-cover bg-center before:h-full before:w-full before:left-0 before:top-0 before:bg-white/0 hover:before:bg-bpisshdw/40 before:bg-cover"
      style={{
        backgroundImage: `url(${item.adresssm})`,
      }}
    />
  ));

  return <>{gallery}</>;
};

export default GalleryContent;
