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

  const stagesGallery = imagesArray.map((item, index) => {
    return (
      <li
        key={`stages_${index}`}
        className="w-full h-full items-center relative justify-center"
      >
        <p className="mx-auto text-2xl absolute left-[50vw] md:left-[15vw] top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white font-semibold uppercase">
          {item.text}
        </p>
        <img
          className="absolute w-4/5 left-[10vw] md:left-0 self-center md:w-full h-full object-cover"
          src={item.pic}
        />
      </li>
    );
  });

  return (
    <div className="relative col-span-full h-screen md:h-[40vh]">
      <ul className="w-full h-[100vh] md:h-64 absolute top-0 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-0 md:gap-y-0 z-40">
        {stagesGallery}
      </ul>
      <div className="w-screen bg-bpisg h-[50vh] md:h-64 absolute top-[70%] md:top-[22vh] z-20 overflow-hidden"></div>
    </div>
  );
};

export default Stages;
