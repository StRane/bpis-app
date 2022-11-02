const GalleryButton: React.FC<{
  type: string;
  style: string;
  clicked: (val: number) => void;
}> = (props) => {
  let tempValue = 1;
  if (props.type === "decrease") {
    tempValue = -1;
  }
  return (
    <button className={props.style} onClick={() => props.clicked(tempValue)}>
      {props.type === "decrease" ? (
        <div className="md:-translate-y-1 md:-translate-x-0.5">&#60;</div>
      ) : (
        <div className="md:-translate-y-1 md:translate-x-0.5">&#62;</div>
      )}
    </button>
  );
};

export default GalleryButton;
