import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { router } from "./routes/Routes/Routes";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
