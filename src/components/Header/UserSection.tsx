import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import styles from "./userSection.module.scss";

type UserSectionProps = {
  onClick?: () => void;
};

export const UserSection = (props: UserSectionProps) => {
  const { user, isLoggued } = useUser();
  const userImage =
    user?.image != "" ? user?.image : "/src/assets/images/defaultUser.png";

  return (
    <div onClick={props.onClick}>
      {isLoggued ? (
        <div className={styles.headerUser}>
          <h4>{user!.name}</h4>
          <img src={userImage} alt="userAvatar" />
        </div>
      ) : (
        <Link className={styles.headerLink} to="/auth/login">
          Login
        </Link>
      )}
    </div>
  );
};
