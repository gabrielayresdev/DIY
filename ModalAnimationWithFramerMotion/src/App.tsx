import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Modal visible={visible} setVisible={setVisible}>
        <h1>Hello World</h1>
      </Modal>
      <div className="card">
        <button onClick={() => setVisible(true)}>Open modal</button>
      </div>
    </div>
  );
}

export default App;
