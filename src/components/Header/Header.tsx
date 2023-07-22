import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import DropdownMenu from "./DropdownMenu";
import "./header.scss";
import { UserSection } from "./UserSection";

type HeaderPropType = {};

const Header = ({}: HeaderPropType) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <div className="header_bar">
        <div className="header_bar__content">
          <Logo
            inLine={true}
            size={3}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <UserSection onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
      <DropdownMenu showMenu={showMenu} hideMenu={() => setShowMenu(false)} />
    </div>
  );
};

export default Header;
