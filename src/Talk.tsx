import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

type PropsWithChildren = {
  children: JSX.Element;
};

function ContextProvider({ children }: PropsWithChildren): JSX.Element {
  /* Here goes the Contexts Providers from Context API */
  return <div>{children}</div>;
}

function Talk(): JSX.Element {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={component} />
          ))}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default Talk;
