import { FC, useState } from 'react';
import { QuestionCardItem } from './style';

interface QuestionCardProps {
  isActive: boolean;
  onShow: () => void;
  question?: string;
  answer?: string;
}

const QuestionCard: FC<QuestionCardProps> = ({ isActive, onShow, question, answer }) => {
  const [lol, setLol] = useState(true);

  return (
    <QuestionCardItem isActive={isActive} onClick={isActive ? () => setLol(!lol) : onShow}>
      <h2>{question}</h2>
      {isActive && lol && (
        <div>
          <p>{answer}</p>
        </div>
      )}
    </QuestionCardItem>
  );
};

export default QuestionCard;
