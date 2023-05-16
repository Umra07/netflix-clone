import { useState } from 'react';
import QuestionCard from './QuestionCard';
import { questionsData } from './data';
import { QuestionsListWrapper } from './style';

const QuestionsList = () => {
  const [activeIndex, setActiveIndex] = useState<number | 'closed'>('closed');

  const showAnswer = (id: number) => {
    activeIndex === id ? setActiveIndex('closed') : setActiveIndex(id);
  };

  return (
    <QuestionsListWrapper>
      {questionsData.map((item) => (
        <QuestionCard
          key={item.id}
          isActive={activeIndex === item.id}
          onShow={() => showAnswer(item.id)}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </QuestionsListWrapper>
  );
};

export default QuestionsList;
