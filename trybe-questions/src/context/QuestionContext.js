import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

function QuestionProvider(props) {
  const [questions, setQuestions] = useState([
    {
      name: 'WOlf',
      question: 'pato ou urso? ',
    },
  ]);

  const addNewQuestion = (question) => {
    setQuestions((oldState) => [...oldState, question]);
  };

  const contextValue = {
    questions,
    addNewQuestion,
  };
  return (
    <QuestionContext.Provider value={contextValue}>
      {props.children}
    </QuestionContext.Provider>
  );
}
export default QuestionProvider;
