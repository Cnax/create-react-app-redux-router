import React from 'react';

import './header.less';

const Header = ({ headerContent }) => {
  return (
    <header>
      {headerContent}
    </header>
  );
}

export default Header;