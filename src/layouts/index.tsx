import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd';

import './index.less';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Card
        bordered={false}
        className="card"
        bodyStyle={{
          padding: 0
        }}
      >{children}</Card>
    )
  }
}

export default Layout;