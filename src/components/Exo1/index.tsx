import './styles.scss';
import { useState } from 'react';
import Form from './Form';

function Exo1() {
  const [inputExo1, setInputExo1] = useState('');

  return (
    <div className="exercice">
      <h2 className={(inputExo1.length > 6) ? 'red' : ''}>
        Exo1 : ton message apparait ici au onChange
        (si + de 6 caractères titre en rouge) :
        {inputExo1}
      </h2>
      <Form setInputExo1={setInputExo1} inputExo1={inputExo1} />
    </div>
  );
}

export default Exo1;
