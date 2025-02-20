import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import AddMonthDisplay from "./components/Add-month";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add-month",
        element: <AddMonthDisplay />,
      },
    ],
  },
]);

export default router;
