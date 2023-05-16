import { FC, useState } from 'react';
import { QuestionCardItem } from './style';

interface QuestionCardProps {
  isActive: boolean;
  onShow: () => void;
  question?: string;
  answer?: string;
}

const QuestionCard: FC<QuestionCardProps> = ({ isActive, onShow, question, answer }) => {
  return (
    <QuestionCardItem isActive={isActive} onClick={onShow}>
      <h2>{question}</h2>
      {isActive && <p>{answer}</p>}
    </QuestionCardItem>
  );
};

export default QuestionCard;
