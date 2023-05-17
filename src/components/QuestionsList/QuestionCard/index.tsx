import { FC, useRef } from 'react';
import { QuestionCardItem, QuestionHeading } from './style';

interface QuestionCardProps {
  isActive: boolean;
  onShow: () => void;
  question?: string;
  answer?: string;
}

const QuestionCard: FC<QuestionCardProps> = ({ isActive, onShow, question, answer }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  return (
    <QuestionCardItem
      isActive={isActive}
      onClick={onShow}
      answerHeight={
        paragraphRef.current &&
        paragraphRef.current.clientHeight &&
        paragraphRef.current.clientHeight
      }>
      <QuestionHeading isActive={isActive}>
        <h2>{question}</h2>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Add">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
            fill="currentColor"></path>
        </svg>
      </QuestionHeading>
      <div className="answer">
        <p ref={paragraphRef}>{answer}</p>
      </div>
    </QuestionCardItem>
  );
};

export default QuestionCard;
