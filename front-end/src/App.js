import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.js";
import './components/elements/Elements.scss'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
