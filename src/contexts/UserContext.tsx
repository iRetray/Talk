/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, createContext, useEffect } from "react";

import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

type PropsWithChildren = {
  children: JSX.Element;
};

export type ContextStateType = {
  isLogged: boolean;
  displayName: string;
  email: string;
  metadata: {
    createdAt: string;
    lastLoginAt: string;
  };
  phoneNumber: string;
  photoURL: string;
  uid: string;
};

type ReducerPayload = {
  type: string;
  payload: any;
};

export const UserContext = createContext({});

const initialState: ContextStateType = {
  isLogged: false,
  displayName: "",
  email: "",
  metadata: {
    createdAt: "",
    lastLoginAt: "",
  },
  phoneNumber: "",
  photoURL: "",
  uid: "string",
};

const userReducer = (
  state: ContextStateType,
  { type, payload }: ReducerPayload
): ContextStateType => {
  switch (type) {
    case "SET_USER_LOGGED":
      return {
        ...state,
        ...payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return initialState;
  }
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const auth = getAuth();
  const [state, UserDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    setAuthPersistence();
    verifyUserLogged();
  }, []);

  const setAuthPersistence = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.info("App configured to save session");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  const verifyUserLogged = () => {
    auth.onAuthStateChanged((user) => {
      UserDispatch({
        type: "SET_USER_LOGGED",
        payload: { isLogged: user !== null, ...user },
      });
    });
  };

  return (
    <UserContext.Provider value={[state, UserDispatch]}>
      {children}
    </UserContext.Provider>
  );
};
