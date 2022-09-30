import React from 'react';
import { MenuConfig } from '~/interface';
import Router from 'next/router';

import './index.less';

interface IProps extends MenuConfig {
  active: boolean;
  drawerToggle?: () => void;
}
const MenuItem = (props: IProps) => {
  const { title, icon, path, active, drawerToggle } = props;
  return (
    <div
      className={active ? "menuItem active" : "menuItem"}
      onClick={() => {
        Router.push(path, process.env.LINK_PREFIX + path)
        if (drawerToggle) drawerToggle()
      }}
    >
      {icon}
      <span>{title}</span>
    </div>
  )
}

export default MenuItem;