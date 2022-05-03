import { Welcome } from "./pages";

type Route = {
  path: string;
  component: JSX.Element;
};

const routes: Route[] = [
  {
    path: "/",
    component: <Welcome />,
  },
];

export default routes;
