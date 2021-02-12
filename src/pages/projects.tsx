import Head from 'next/head';
import profileData from 'configs/data';
import { IProject, IAppLink } from '~/interface';
import { Fragment } from 'react';

export default () => (
  <div>
    <Head>
      <title>Projects</title>
    </Head>
    <div style={{ margin: '10px 20px' }}>
      <h1>My Projects</h1>
      <Fragment>
        {profileData.projects.map((item: IProject) => (
          <div
            key={`project-${item.title}`}
            style={{ borderBottom: '1px dashed blueviolet', marginTop: 10 }}
          >
            <h2>{item.title}</h2>
            <div style={{ marginLeft: 15 }}>
              <h3>features:</h3>
              <ul>
                {item.features.map((feature: string) => (
                  <li>{feature}</li>
                ))}
              </ul>
              {item.appLinks &&
                item.appLinks.length > 0 && (
                  <Fragment>
                    <h3>app links:</h3>
                    <ul>
                      {item.appLinks.map((link: IAppLink) => (
                        <li key={`link-${link.url}`} style={{ fontSize: '15px' }}>
                          <span>
                            <a href={link.url}>{link.title}</a>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                )}
              {item.todos &&
                item.todos.length > 0 && (
                  <Fragment>
                    <h3>todos:</h3>
                    <ul>
                      {item.todos.map((todo: string) => (
                        <li key={`todo-${todo}`}>{todo}</li>
                      ))}
                    </ul>
                  </Fragment>
                )}
            </div>
          </div>
        ))}
      </Fragment>
    </div>
  </div >
)