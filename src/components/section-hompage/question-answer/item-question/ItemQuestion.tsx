import { useState } from "react";

interface ItemQuestionProps {
  id: number;
  question: string;
  answer: string;
}
const ItemQuestion: React.FC<ItemQuestionProps> = ({
  id,
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="qa-item">
      <div className="flex-row item-start space-between">
        <p className="medium-title w-75">
          {id}. {question}
        </p>
        {!isOpen ? (
          <div
            className="expand flex item-center content-center"
            onClick={toggleAnswer}
          >
            +
          </div>
        ) : (
          <div
            className="hidden flex item-center content-center"
            onClick={toggleAnswer}
          >
            -
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex-row item-center space-between">
          <p className="answer w-75">{answer}</p>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ItemQuestion;
