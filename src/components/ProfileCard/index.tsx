import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

import './index.less';

const leftCol = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 8,
  lg: 8,
}
const rightCol = {
  xs: 24,
  sm: 24,
  md: 12,
  xl: 16,
  lg: 16,
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
            <Col
              {...rightCol}
            >
              <Title level={2}>Prathap K</Title>
              <Paragraph>Just a guy who's developer for fun ^0^ </Paragraph>
            </Col>
          </Row>
        </Card>
      </Fragment>
    )
  }
}

export default DPCard;