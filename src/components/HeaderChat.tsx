import moment from "moment";
import "moment/locale/es-mx";

import { GoPrimitiveDot } from "react-icons/go";

type HeaderChatProps = {
  picture: JSX.Element;
  name: string;
  isActive: boolean;
  lastConnection: number;
};

export const HeaderChat = ({
  picture,
  name,
  isActive,
  lastConnection,
}: HeaderChatProps): JSX.Element => {
  return (
    <div className="HeaderChatContainer">
      {picture}
      <div className="textContainer">
        <p className="name">{name}</p>
        <p className="status">
          {isActive && <GoPrimitiveDot color="#52c41a" />}
          {isActive
            ? "Online"
            : `Last connection ${moment(lastConnection).fromNow()}`}
        </p>
      </div>
    </div>
  );
};
