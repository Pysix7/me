import React, { Fragment } from 'react';
import Head from 'next/head';
import { Card, Typography } from 'antd';
import Media from 'react-media';
import profileData from 'configs/data';
import { IProject, ILink } from '~/interface';
import MasonryLayout from '~/components/MasonryLayout';

import '~/layouts/projects.less';

const { Title, Link } = Typography;

export default () => (
  <Media query="(max-width: 599px)">
    {(isMobile: boolean) => (
      <div>
        <Head>
          <title>Projects</title>
        </Head>
        <div className="container">
          <Title level={1} className="antdTitle">Projects</Title>
          <MasonryLayout columns={isMobile ? 1 : 2}>
            {profileData.projects.map((item: IProject) => (
              <Card
                className="card"
                key={`project-${item.title}`}
                bodyStyle={{ overflow: 'hidden' }}
              >
                <Title level={2} className="projectTitle">{item.title}</Title>
                <div style={{ marginLeft: 15 }}>
                  <Title level={3} className="antdTitle">features:</Title>
                  <ul>
                    {item.features.map((feature: string) => (
                      <li className="feature" key={`feature-${feature}`}>{feature}</li>
                    ))}
                  </ul>
                  {item.links &&
                    item.links.length > 0 && (
                      <Fragment>
                        <Title level={3} className="antdTitle">links:</Title>
                        <ul>
                          {item.links.map((link: ILink, index) => (
                            <li key={`link-${link.url}`} className="link">
                              <span>
                                <Link href={link.url} target="_blank">
                                  {link.title}
                                </Link>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    )}
                </div>
              </Card>
            ))}
          </MasonryLayout>
        </div>
      </div >
    )}
  </Media>
)