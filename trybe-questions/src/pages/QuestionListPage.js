import React, { useContext } from 'react';
import QuestionCard from '../components/QuestionCard';
import { QuestionContext } from '../context/QuestionContext';

function QuestionListPage(props) {
  const { questions } = useContext(QuestionContext);
  const { history } = props;

  return (
    <section>
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
      <button type="button" onClick={() => history.push('/new-question')}>
        Nova Pergunta
      </button>
    </section>
  );
}

export default QuestionListPage;
