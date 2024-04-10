import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Signup from "./pages/Signup.jsx";
import Welcome from "./pages/Welcome.jsx";
import Describe from "./pages/Describe.jsx";
import Form from "./pages/Form.jsx";
import Email from "./pages/Email.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Form />,
    children: [
      {
        path: "",
        element: <Signup />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/describe",
        element: <Describe />,
      },
      {
        path: "/email",
        element: <Email />,
      },
    ],
  },
  // {
  //   path: "",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/home",
  //       element: <Home />,
  //     },
  //   ],
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
