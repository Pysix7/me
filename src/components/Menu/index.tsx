import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { Row } from 'antd';
import { WithRouterProps } from 'next/dist/client/with-router';
import MenuItem from '~/components/MenuItem';
import { MenuConfig } from '~/interface';

import './index.less';

interface IProps extends WithRouterProps {
  menuData: MenuConfig[];
  drawerToggle?: () => void;
}

class Menu extends PureComponent<IProps> {
  render() {
    const {
      menuData,
      router: { pathname },
      drawerToggle
    } = this.props;

    return (
      <Fragment>
        <Row className="MenuCard" >
          {menuData && menuData.length > 0 ? menuData.map((item: MenuConfig) => (
            <div key={item.path} >
              <MenuItem
                active={item.path === pathname}
                drawerToggle={drawerToggle}
                {...item}
              />
            </div>
          ))
            : null}
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(Menu);