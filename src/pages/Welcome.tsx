import { Fragment } from "react";

import {
  BoxMessage,
  TalkTitle,
  ChatContainer,
  HeaderChat,
  Avatar,
} from "../components";

export const Welcome = (): JSX.Element => {
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
        </ChatContainer>
      </div>
    </Fragment>
  );
};
