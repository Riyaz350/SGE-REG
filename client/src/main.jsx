import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./Components/Registration/Registration.jsx";
import MainForm from "./Components/Registration2/MainForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Registration/>
    element: <MainForm />,
  },
  {
    path: "/Registration",
    // element: <Registration/>
    element: <Registration />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
