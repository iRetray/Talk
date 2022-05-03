import { Fragment } from "react";

import { BoxMessage, TalkTitle } from "../components";

import background from "../images/background.png";

export const Welcome = (): JSX.Element => {
  return (
    <Fragment>
      <div className="WelcomeContainer">
        <TalkTitle />
        <div className="chatContainer">
          <img src={background} alt="" />
          <BoxMessage
            date={1651551379163}
            author="Julian Camilo Cruz"
            message="Hey! You can send messages instantly to your friends, that is awesome!"
          />
          <BoxMessage
            position="right"
            date={1651556446578}
            author="Camilo Stefan Daitz"
            message="OMG! I didn't know it! I will share this app with all my friends right now!"
          />
        </div>
      </div>
    </Fragment>
  );
};
