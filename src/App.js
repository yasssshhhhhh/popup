import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleClick() {
    setOpenModal(true);
  }
  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button onClick={handleClick} className="openModalBtn">
        Open
      </button>
      {openModal && <Modal closemodal={setOpenModal} />}
    </div>
  );
}

export default App;
