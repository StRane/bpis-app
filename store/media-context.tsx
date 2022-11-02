import {createContext} from "react";


type media = {
  name?: string;
  title?: string;
  day?: string;
  month?: string;
  adress?: string;
  adresssm?: string;
  id:number;
};

const MediaContext = createContext<{activities:media[];}>({
  activities: [],
});

export default MediaContext;
