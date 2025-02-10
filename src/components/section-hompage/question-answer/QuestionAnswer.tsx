import { Question } from "../../../model/Question";
import ItemQuestion from "./item-question/ItemQuestion";
import "./qa.scss";

const QuestionAnswer: React.FC = () => {
  const listQuestion: Question[] = [
    {
      id: 1,
      question: "Can I Find the right information faster?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 2,
      question: "How to share feature demos and ideas?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 3,
      question: "How to get insights from users?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
    {
      id: 4,
      question: "Can I develop my website without code?",
      answer:
        "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
    },
  ];
  return (
    <div className="container-qa flex-column">
      <p className="large-title text-center">FAQs</p>
      <div className="flex-column box-question">
        {listQuestion.map((item, index) => (
          <>
            <ItemQuestion
              key={index}
              id={item.id}
              question={item.question}
              answer={item.answer}
            />
            {index < listQuestion.length-1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswer;
