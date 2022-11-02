import Image1 from "../../../images/stages/img-bottom-4.webp";
import Image2 from "../../../images/stages/img-bottom-5.webp";
import Image3 from "../../../images/stages/img-bottom-6.webp";

const Stages = () => {
  const imagesArray = [
    {
      pic: Image1.src,
      text: "Key Stage 3 Admissions",
    },
    {
      pic: Image2.src,
      text: "IGCSE Admissions",
    },
    {
      pic: Image3.src,
      text: "A-Level Education",
    },
  ];

  const stagesGallery = imagesArray.map((item , index) => {
    return (
      <li key={`stages_${index}`} className="w-full h-full">
        <div className="absolute top-1/2 -translate-y-1/2 w-1/3 place-content-center z-50">
          <p className="w-2/5 mx-auto text-2xl text-white font-semibold uppercase">
            {item.text}
          </p>
        </div>
        <img className="absolute w-1/3 h-full object-cover " src={item.pic} />
      </li>
    );
  });

  return (
    <div className="relative col-span-full h-64">
      <ul className="w-full h-full absolute top-0 grid grid-cols-3 gap-0 overflow-clip z-40">
        {stagesGallery}
      </ul>
      <div className="w-screen bg-bpisg h-64 absolute top-28 z-20 -left-10 overflow-hidden"></div>
    </div>
  );
};

export default Stages;
