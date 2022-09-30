import React, { PureComponent, Fragment } from 'react';
import Media from 'react-media';
import Head from './Head';
import Body from './Body';
import Menu from '~/components/Menu';
import menuConfig from '~/configs/menuConfig';

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
              <Menu menuData={menuConfig} />
              <div className='page-container'>{children}</div>
            </Body>
          </Fragment>
        )}
      </Media>
    )
  }
}

export default Layout;