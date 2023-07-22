import { useNavigate } from "react-router-dom";
import { Roles } from "../../helpers/roles.enum";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import "./header.scss";
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
    <div className="header__dropdown">
      <div
        className={
          "header__dropdown--menu" + (props.showMenu ? "" : " hideMenu")
        }
      >
        <div
          className={
            "headerMenu " +
            (user?.role == Roles.ADMIN ? " headerMenu--adminSize" : "")
          }
        >
          <div className="headerMenu__content">
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
