import React, { PureComponent, Fragment } from 'react';
import Media from 'react-media';
import Head from './Head';
import Body from './Body';

import './index.less';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Media query="(max-width: 599px)">
        {(isMobile: boolean) => (
          <Fragment>
            <Head isMobile={isMobile} />
            <Body>
              {children}
            </Body>
          </Fragment>
        )}
      </Media>
    )
  }
}

export default Layout;