import Dashboard from "../pages/Dashboard";

import { createBrowserRouter } from "react-router-dom";
import AdvanceQuarry from "../pages/AdvanceQuarry";
import Events from "../pages/Events";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/advancequarry",
        element: <AdvanceQuarry />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

export default router;
