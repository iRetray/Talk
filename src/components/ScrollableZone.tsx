type PropsWithChildren = {
  children: JSX.Element;
};

export const ScrollableZone = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <div className="ScrollableContainer">{children}</div>;
};
