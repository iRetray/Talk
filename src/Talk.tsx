import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

import { UserProvider } from "./contexts";

import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebase/firebaseConfig";

type PropsWithChildren = {
  children: JSX.Element;
};

function FirebaseGlobalProvider({ children }: PropsWithChildren): JSX.Element {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {children}
    </FirebaseAppProvider>
  );
}

function FirebaseSDKProvider({ children }: PropsWithChildren): JSX.Element {
  const firebaseApp = useFirebaseApp();
  const authInstance = getAuth(firebaseApp);

  return <AuthProvider sdk={authInstance}>{children}</AuthProvider>;
}

function ContextProvider({ children }: PropsWithChildren): JSX.Element {
  return <UserProvider>{children}</UserProvider>;
}

function Talk(): JSX.Element {
  return (
    <FirebaseGlobalProvider>
      <FirebaseSDKProvider>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              {routes.map(({ path, component }, index) => (
                <Route key={index} path={path} element={component} />
              ))}
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </FirebaseSDKProvider>
    </FirebaseGlobalProvider>
  );
}

export default Talk;
