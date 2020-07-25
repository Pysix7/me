import React from 'react';
import ProfileCard from '~/components/ProfileCard';
import Menu from '~/components/Menu';
import { MenuConfig } from '~/interface';

import './index.less';

const DefaultHead = (props: { menuData: MenuConfig[] }) => {
  const { menuData } = props;
  return (
    <div className="headContainer" >
      <div>
        <ProfileCard />
      </div>
      <div className="menuCol">
        <Menu menuData={menuData} />
      </div>
    </div>
  )
}
export default DefaultHead;