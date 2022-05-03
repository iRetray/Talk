type PropsWithChildren = {
  children: JSX.Element | JSX.Element[];
};

export const ChatContainer = ({ children }: PropsWithChildren): JSX.Element => {
  return <div className="ChatContainer">{children}</div>;
};
