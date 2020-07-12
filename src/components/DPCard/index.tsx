import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col } from 'antd';

import './index.less';

class DPCard extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Card
              className="DPCard"
            >
              picture Here
          </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default DPCard;