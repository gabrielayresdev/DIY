import { Bounce, ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => {
    toast.success(
      "Ut ipsum sunt cupidatat irure mollit occaecat proident ad.",
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };
  return (
    <>
      <div className="card">
        <button onClick={() => notify()}>Notify</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
