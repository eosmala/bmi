import './App.css';
import {useState} from 'react';

function App() {
  const [height, setHeight] = useState(1.88);
  const [weight, setWeight] = useState(90);
  const [bmi, setBmi] = useState(0);

  function calcBmi(e) {
    e.preventDefault();
    const result = weight /( height * height);
    setBmi(result)
  }


  return (
    <div>
      <form onSubmit={calcBmi}>
        <div>
          <label>Height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        </div>
        <div>
        <label>Weight</label>
          <input type="number"value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
        <label>Bmi</label>
        <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
