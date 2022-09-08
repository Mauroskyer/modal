import './App.css';
import openModal, { openModalAccount } from './component/openModal';

function App() {
  /* Displays the contents of modalSettings */
  function handleOpenModal(event) {
    openModal();
  }

  /* Displays the contents of modalAccount */
  function handleOpenModal2(event) {
    openModalAccount();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <button onClick={handleOpenModal2}>Abrir Modal2</button>
    </div>
  );
}

export default App;
