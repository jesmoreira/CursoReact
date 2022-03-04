
import './App.css';
import Eventos from './components/Eventos';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Eventos numero={1}/>
      <Form/>
    </div>
  );
}

export default App;