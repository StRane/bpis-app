import { useContext } from "react";

import MediaContext from "../../../store/media-context";

const GalleryContent = () => {
  const mediCtx = useContext(MediaContext);

  const activities = mediCtx.activities;

  const mediaContent = [...activities].slice(1);

  const gallery = mediaContent.map((item) => (
    <a
    key={item.id}
      href="#"
      className="col-span-1 before:content-[''] before:absolute relative before:max-w-qfix bg-cover bg-center before:h-full before:w-full before:left-0 before:top-0 before:bg-white/0 hover:before:bg-bpisshdw/40 before:bg-cover"
      style={{
        backgroundImage: `url(${item.adresssm})`,
      }}
    />
  ));

  return <>{gallery}</>;
};

export default GalleryContent;
