import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import profileData from '~/configs/data';

import './index.less';

const leftCol = {
  // xs: 24,
  // sm: 24,
  // md: 12,
  // xl: 24,
  // lg: 24,
}
const rightCol = {
  // xs: 24,
  // sm: 24,
  // md: 12,
  // xl: 24,
  // lg: 24,
}

class DPCard extends PureComponent {
  render() {
    return (
      <Fragment>
        <Card
          bordered={false}
          bodyStyle={{ padding: 0 }}
          className="DPCard"
        >
          <Row
            style={{
              height: '100%',
            }}
          >
            <Col {...leftCol} >
              <div className="profile">
                <img src={process.env.LINK_PREFIX + "/profilex250.jpg"} alt="profile" />
              </div>
            </Col>
            <Col {...rightCol} >
              <span className="name">{profileData.name}</span>
              <p className="description">{profileData.description}</p>
            </Col>
          </Row>
        </Card>
      </Fragment>
    )
  }
}

export default DPCard;