import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import DropdownMenu from './DropdownMenu';
import styles from './header.module.scss';
import { UserSection } from './UserSection';

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.header_bar}>
        <div className={styles.header_bar__content}>
          <Logo
            inLine
            size={3}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <UserSection onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
      <DropdownMenu showMenu={showMenu} hideMenu={() => setShowMenu(false)} />
    </div>
  );
};

export default Header;
