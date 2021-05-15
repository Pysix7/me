import React, { Fragment } from 'react';
import Head from 'next/head';
import { Card, Typography } from 'antd';
import Media from 'react-media';
import profileData from 'configs/data';
import { IProject, IAppLink } from '~/interface';
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
          <Title level={1} className="antdTitle">My Projects</Title>
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
                      <li className="feature">{feature}</li>
                    ))}
                  </ul>
                  {item.appLinks &&
                    item.appLinks.length > 0 && (
                      <Fragment>
                        <Title level={3} className="antdTitle">app links:</Title>
                        <ul>
                          {item.appLinks.map((link: IAppLink) => (
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
                  {item.todos &&
                    item.todos.length > 0 && (
                      <Fragment>
                        <Title level={3} className="antdTitle">todos:</Title>
                        <ul>
                          {item.todos.map((todo: string) => (
                            <li key={`todo-${todo}`}>{todo}</li>
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