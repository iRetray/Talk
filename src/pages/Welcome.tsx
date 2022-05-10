import { Fragment, useContext } from "react";

import {
  BoxMessage,
  TalkTitle,
  ChatContainer,
  HeaderChat,
  Avatar,
} from "../components";

import { UserContext, ContextStateType } from "../contexts";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import googleIcon from "../images/google.png";

type ContextConsumer = [ContextStateType, any];

export const Welcome = (): JSX.Element => {
  const [, UserDispatch] = useContext(UserContext) as ContextConsumer;

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = (): void => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        UserDispatch({
          type: "SET_USER_LOGGED",
          payload: {
            isLogged: true,
            ...user,
          },
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  return (
    <Fragment>
      <div className="WelcomeContainer">
        <TalkTitle />
        <p className="subtitle">Write, communicate, express yourself</p>
        <ChatContainer>
          <HeaderChat
            picture={<Avatar />}
            name="Julian Camilo Cruz"
            isActive={true}
            lastConnection={1651605061575}
          />
          <BoxMessage
            date={1651551379163}
            author="Julian Camilo Cruz"
            message="Hey! You can instantly send messages to your friends, that's awesome!"
          />
          <BoxMessage
            position="right"
            date={1651556446578}
            author="Camilo Stefan Daitz"
            message="OMG! I did not know it! I will share this app with all my friends right now!"
          />
          <div className="googleLoginContainer" onClick={signInWithGoogle}>
            <div className="googleIcon">
              <img src={googleIcon} alt="" />
            </div>
            <span>Create account with Google</span>
          </div>
        </ChatContainer>
      </div>
    </Fragment>
  );
};
