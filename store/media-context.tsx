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

type menuitem = {
  name: string;
    id: number;
    hovering?: boolean;
    submenu?: { title: string; adress: string }[];
    target?: string;}

const MediaContext = createContext<{activities:media[];menuitem:menuitem[]}>({
  activities: [], menuitem:[]
});

export default MediaContext;
