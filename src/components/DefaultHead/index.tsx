import React from 'react';
import { Row, Col } from 'antd';
import ProfileCard from '~/components/ProfileCard';
import Menu from '~/components/Menu';
import { MenuConfig } from '~/interface';

import './index.less';

const leftCol = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 10,
  lg: 10,
}

const rightCol = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 14,
  lg: 14,
}

const DefaultHead = (props: { menuData: MenuConfig[] }) => {
  const { menuData } = props;
  return (
    <Row className="headContainer" >
      <Col {...leftCol} >
        <ProfileCard />
      </Col>
      <Col
        {...rightCol}
        className="menuCol"
      >
        <Menu menuData={menuData} />
      </Col>
    </Row>
  )
}
export default DefaultHead;