import moment from "moment";
import "moment/locale/es-mx";

type BoxMessageProps = {
  /* create here more types for send videos and files */
  type?: "message" | "audio";
  position?: "left" | "right";
  author: string;
  date: number;
  message: string | JSX.Element;
};

export const BoxMessage = ({
  type = "message",
  position = "left",
  author,
  date,
  message,
}: BoxMessageProps): JSX.Element => {
  const isPrimaryChat = (): boolean => position === "left";

  const getFormattedDate = (momentDate: number): string =>
    moment(momentDate).format("hh:mm a");

  return (
    <div
      className={`BoxMessageContainer ${
        !isPrimaryChat() ? "RIGHT_CONTAINER" : ""
      }`}
    >
      <p className={`mainContainer ${!isPrimaryChat() ? "RIGHT" : ""}`}>
        <div className="header">
          <p>
            <strong>{author}</strong>
          </p>
          <p className="date">{getFormattedDate(date)}</p>
        </div>
        <p>{message}</p>
      </p>
      <div className={`arrow ${!isPrimaryChat() ? "RIGHT_ARROW" : ""}`}></div>
      <div
        className={`arrowShadow ${
          !isPrimaryChat() ? "RIGHT_SHADOW_ARROW" : ""
        }`}
      ></div>
    </div>
  );
};
