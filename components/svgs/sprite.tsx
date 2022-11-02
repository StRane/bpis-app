import Academic from "./academic";
import Achievements from "./achievements";
import LongArrow from "./longarrow";
import Map from "./map";

const Sprite:React.FC<{id: string, style: string;}> = (props) => {
  switch(props.id){
    case 'academic':
      return <Academic style={props.style} />
    case 'achievements':
      return <Achievements style={props.style}/>
    case 'long-arrow':
      return <LongArrow style={props.style} /> 
    case 'map':
      return <Map style={props.style} />     
  }
  return null;
}


export default Sprite;