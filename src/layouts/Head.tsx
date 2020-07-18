import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import ProfileCard from '~/components/ProfileCard';
import Menu from '~/components/Menu';
import menuConfig from '~/configs/menuConfig';

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

class Head extends PureComponent {
  render() {
    return (
      <div
        className="HeadCard"
      >
        <Row
          style={{
            height: '100%',
          }}
        >
          <Col
            {...leftCol}
          >
            <ProfileCard />
          </Col>
          <Col
            {...rightCol}
            className="menuCol"
          >
            <Menu menuData={menuConfig} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head;