import Home from "../views/home";
import Details from "../views/details";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/details",
    exact: true,
    element: <Details />,
  },
];

export default routes;
