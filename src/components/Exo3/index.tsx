import { useState } from 'react';
import './styles.scss';

function Exo3() {
  const [submit, setSubmit] = useState(false);
  return (
    <div className={submit ? 'exercice nuit' : 'exercice'}>
      <h2>Exo3 : Lors du click sur le btn nuit, bg de l&apos;exo3 en black et text en white : </h2>
      <button type="button" className="btn" onClick={() => setSubmit(false)}>Jour</button>
      <button type="button" className="btn" onClick={() => setSubmit(true)}>Nuit</button>
    </div>
  );
}

export default Exo3;
