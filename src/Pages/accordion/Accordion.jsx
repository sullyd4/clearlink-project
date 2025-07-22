import { useState } from "react";
import data from "../../assets/data";
import SingleQuestion from "./Question";
function Accordion() {
  const [questions, setQuestions] = useState(data);
  console.log(setQuestions);
  return (
    <main>
      <div className=" text-center text-slate-900 pb-10 pt-20 ">
        <div className=" container w-[100%] mx-auto rounded-tl-xl rounded-tr-xl shadow-xl ">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Accordion;