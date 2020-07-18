import React, { PureComponent, Fragment } from 'react';
import Head from './Head';
import Body from './Body';

import './index.less';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Head />
        <Body>
          {children}
        </Body>
      </Fragment>
    )
  }
}

export default Layout;