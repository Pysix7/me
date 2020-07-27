import React, { Fragment } from 'react';
import { Row } from 'antd';
import Head from 'next/head';
import LinkComponent from '~/components/LinkComponent';
import slData from '~/configs/socialLinks';
import { SocialLink } from '~/interface';

import './index.less';

export default () => {

  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <div className="welcome">
        Welcome to My Portfolio.
      </div>
      <div className="about">
        i am a Software Developer from Bengaluru, India.<br />
        currently working with MERN stack, building both WEB and Mobile applications.
      </div>
      <div className="socialLinks">
        Social links:
          <Row>
          {slData && slData.length > 0
            ? slData.map((item: SocialLink) => (
              <div key={item.title} >
                <LinkComponent {...item} />
              </div>
            ))
            : null}
        </Row>
      </div>
    </Fragment>
  )
}