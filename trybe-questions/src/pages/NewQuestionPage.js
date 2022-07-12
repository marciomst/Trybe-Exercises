import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';

function NewQuestionPage() {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');

  const { addNewQuestion } = useContext(QuestionContext);
  const history = useHistory();

  const handleChangeQuestion = ({ target: { value } }) => {
    setQuestion(value);
  };

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  // const [state, setState] = useState({
  //   question: '',
  //   name: '',
  // });

  // const handleChange = ({ target: { value, name } }) => {
  //   setState((oldState) => ({ ...oldState, [name]: value }));
  // };

  const handleOnSubmit = (event) => {
    const newQuestion = {
      name, question,
    };
    event.preventDefault();
    addNewQuestion(newQuestion);
    setQuestion('');
    setName('');
    history.push('/');
  };

  return (
    <section className="question-section">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
            value={question}
            onChange={handleChangeQuestion}
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            type="text"
            name="name"
            placeholder="Escreva seu nome..."
            id="user"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;

// [X]- Como criar um estado com useState
// [X]- O que o useState requestAnimationFrame
// [X]- Como usar os "set"
// [X]- Como usar o useContext

// [X]- useHistory
