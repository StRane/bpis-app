import Image1 from "../../../images/exams/client_7c.webp";
import Image2 from "../../../images/exams/client_8c.webp";
import Image3 from "../../../images/exams/client_9c.webp";
import Image4 from "../../../images/exams/client_10c.webp";

const Exams = () => {
  const imagesArray = [
    { pic: Image1.src, name: "International Schools Association of Thailand" },
    { pic: Image2.src, name: "Office for National Education Standards and Quality Assessment" },
    { pic: Image3.src, name: "Ministry of Education, Thailand" },
    { pic: Image4.src, name: "Cambridge Assessment International Education" },
  ];

  const examsGallery = imagesArray.map((item, index) => {
    return<img src={item.pic} alt={item.name} key={`exams_${index}`} className="h-full w-max"/>
  })

  return <div className="col-span-12 grid grid-cols-4 place-items-center mb-7">{examsGallery}</div>;
};

export default Exams;
