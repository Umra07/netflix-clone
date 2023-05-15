import { useState } from 'react';
import QuestionCard from '../UI/QuestionCard';
import { questionsData } from './data';
import { QuestionsListWrapper } from './style';

const QuestionsList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <QuestionsListWrapper>
      {questionsData.map((item) => (
        <QuestionCard
          key={item.id}
          isActive={activeIndex === item.id}
          onShow={() => setActiveIndex(item.id)}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </QuestionsListWrapper>
  );
};

export default QuestionsList;
