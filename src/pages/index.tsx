import React, { Fragment } from 'react';
import { Row, Typography } from 'antd';
import Head from 'next/head';
import LinkComponent from '~/components/LinkComponent';
import slData from '~/configs/socialLinks';
import { SocialLink } from '~/interface';

import '~/layouts/indexPage.less';
const { Title } = Typography;

export default () => {

  return (
    <Fragment>
      <Head>
        <title>About Me</title>
      </Head>
      <Title level={1} className="welcome">Welcome to My Portfolio</Title>
      <p className="about">
        i am <strong>Prathap</strong>, a software developer from bengaluru, india.<br />
        currently working with MERN stack, building web, mobile and desktop applications.
      </p>
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