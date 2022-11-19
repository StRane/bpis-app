import {createContext} from "react";


type media = {
  name: string;
  title: string;
  day: string;
  month: string;
  adress: string;
  adresssm: string;
  eventDetails?:string;
  id:number;
  year:number;
};

const MediaContext = createContext<{activities:media[];}>({
  activities: [],
});

export default MediaContext;
