const Pagetitle: React.FC<{ name: string }> = (props) => {
  return (
    <div className="relative w-screen h-96 overflow-hidden">
      <div className="w-full h-full absolute top-0 bg-black/90"></div>
      <h1 className="relative top-64 left-0 text-5xl text-white pl-6 text-left ml-5 lg:ml-28 uppercase before:content-[''] before:w-[3px] before:h-12 before:left-0 before:top-1 before:bg-bpisg before:absolute before:mr-6">
        {props.name}
      </h1>
    </div>
  );
};

export default Pagetitle;
