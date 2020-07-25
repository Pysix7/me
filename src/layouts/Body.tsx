import React, { PureComponent } from 'react';
import { Card } from 'antd';

class Body extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Card
        bordered={false}
        className="bodyCard"
        bodyStyle={{ padding: 10 }}
      >
        {children}
      </Card>
    )
  }
}

export default Body;