import React, { PureComponent } from 'react';
import { Drawer } from 'antd';
import ProfileCard from '~/components/ProfileCard';
import Menu from '~/components/Menu';
import { MenuConfig } from '~/interface';

import './index.less';

interface IProps {
  menuData: MenuConfig[];
  drawerToggle: () => void;
  drawerVisible: boolean;
}

class MobileHead extends PureComponent<IProps> {

  render() {
    const { menuData, drawerToggle, drawerVisible } = this.props;
    return (
      <Drawer
        visible={drawerVisible}
        placement="top"
        height="100%"
        closable={true}
        onClose={drawerToggle}
        className="topDrawer"
      >
        <div style={{ margin: '20px 0' }}>
          <ProfileCard />
        </div>
        {/* <Menu menuData={menuData} drawerToggle={drawerToggle} /> */}
      </Drawer>
    )
  }
}
export default MobileHead;