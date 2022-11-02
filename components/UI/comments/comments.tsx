import { useState } from "react";

const Comments = () => {
  type comment = {
    name: string;
    photo: string;
    relation: string;
    id: number;
    key: string;
    from: string;
    comment: string;
  };

  const [currentComment, setCurrentComment] = useState(0);

  const comments: comment[] = [
    {
      name: "Maitreyee Empson,",
      id:0,
      key: 'com1',
      from: "India,",
      relation: "parent",
      photo: "photo1",
      comment:
        '"BPIS has provided a supportive environment that has enabled Aditya to thrive. He has grown with the responsibility of being Head Boy and achieved excellent academic results including an A* in his IGCSE English Language (First Language). We are grateful to the school and ts staff for enabling Aditya to achieve his potential."',
    },
    {
      name: "Jennifer Areya Keys,",
      from: "US,",
      id:1,
      key: 'com2',
      relation: "student",
      photo: "photo2",
      comment:
        "My name is Jennifer. I have attended BPIS for the last _years and now I’m in Year 13. I achieved my five 5 IGCSEs last year and have just sat my AS-level mathematics exam at Harrow’s. I will be in final year at BPIS (Year 13, Key Stage 5) next year and will be sitting my 3 A-levels (Mathematics, Business Studies, and Computer Science) in May next year. I hope to go to a university in America to become a lawyer. I would recommend learning at BPIS and have always felt safe and supported in BPIS’s encouraging environment. The teachers and staff are very supportive and the learning environment is very focused and rounded letting me achieve all my academic goals and progress to the next step.",
    },
    {
      name: "Behrouz Shahnaz,",
      from: "Iran,",
      relation: "parent",
      id:2,
      key: 'com2',
      photo: "photo3",
      comment:
        '“I have personally chosen this school over other schools due mainly to its friendly and English-speaking atmosphere, kind and considerate teaching staff and director, and above all its well-paced International Curriculum. Now this is the sixth year that my daughter has been in this school and I have noticed that she has honed her social and verbal skills thanks to its multicultural and relaxed environment.”',
    },
  ];

  const clickHandler = (id:number) => {
    setCurrentComment(id);
  }

  const allButtons = comments.map((item,index) => <button key={`comments_${index}`} onClick={()=>clickHandler(item.id)}>{item.photo}</button>);

  const activeComment = comments[currentComment];

  const displayedComment = (
    <div>
      <p className="text-2xl italic text-bpisgry mb-7">
        {activeComment.comment}
      </p>
      <p className="text-xl text-bpisg">
        {activeComment.name + activeComment.from}
        <span className="text-bpisgry">{activeComment.relation}</span>
      </p>
    </div>
  );

  return (
    <div className="col-span-12 mb-28">
      {displayedComment}
      {allButtons}
    </div>
  );
};

export default Comments;
