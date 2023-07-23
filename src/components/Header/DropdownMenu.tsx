import { useNavigate } from "react-router-dom";
import { Roles } from "../../helpers/roles.enum";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import styles from "./header.module.scss";
import MenuItem from "./MenuItem";

type DropdownMenuPropType = {
  showMenu: boolean;
  hideMenu: () => void;
};

const DropdownMenu = (props: DropdownMenuPropType) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const auth = useAuth();

  return (
    <div className={styles.header__dropdown}>
      <div
        className={`${styles.header__dropdown_Menu} ${
          props.showMenu ? "" : styles.hideMenu
        } `}
      >
        <div
          className={`
            ${styles.headerMenu}
            ${user?.role == Roles.ADMIN ? styles.adminSize : ""}

            `}
        >
          <div className={styles.headerMenu__content}>
            <MenuItem
              text="cerrar"
              svg="Xfill"
              svgColor="#F87E7E"
              action={() => props.hideMenu()}
              separator={true}
            />

            {user?.role == Roles.ADMIN && (
              <MenuItem
                text="Dashboard"
                svg="Cog"
                action={() => navigate("/admin/dashboard")}
                separator={true}
              />
            )}

            <MenuItem
              text="Acount"
              svg="Acount"
              action={() => navigate("/acount")}
            />

            <MenuItem text="Logout" svg="Logout" action={() => auth.logOut()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
