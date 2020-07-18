import React, { PureComponent } from 'react';
import { Card } from 'antd';

class Body extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Card
        bordered={false}
        className="BodyCard"
        bodyStyle={{
          padding: 10
        }}
        style={{
          height: '100%',
          flex: 4
        }}
      >
        {children}
      </Card>
    )
  }
}

export default Body;