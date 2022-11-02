const Button: React.FC<{
  type: boolean;
  valu: number;
  clicked: (val: number) => void;
}> = (props) => {
  return (
    <button className="absolute" onClick={() => props.clicked(props.valu)}>
      {props.type ? <>&#60;</> : <>&#62;</>}
    </button>
  );
};

export default Button;
