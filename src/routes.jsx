import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddMonthDisplay from "./components/Add-month";
import ToggleTheme from "./components/Theme-toggle";
import Overview from "./components/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "add-month",
        element: <AddMonthDisplay />,
      },
      {
        path: "change-theme",
        element: <ToggleTheme />,
      },
    ],
  },
]);

export default router;
