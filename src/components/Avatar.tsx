import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/miniavs";

export const Avatar = (): JSX.Element => {
  const avatarSVG = createAvatar(style, {
    dataUri: true,
    backgroundColor: "#fff",
    radius: 50,
  });

  return <img src={avatarSVG} alt="" />;
};
