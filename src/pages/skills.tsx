import Head from 'next/head';
import { Fragment } from 'react';
import { Col, Typography, Card } from 'antd';
import profileData from '~/configs/data';
import { ISkill } from '~/interface';
import MasonryLayout from '~/components/MasonryLayout';
import Media from 'react-media';

import '~/layouts/skills.less';

const { Title, Text } = Typography;

export default () => {
  const { skills } = profileData;

  const renderItem = (data: any) => {
    return (
      <Media query="(max-width: 599px)">
        {(isMobile: boolean) => (
          <MasonryLayout columns={isMobile ? 1 : 3}>
            {data.map((item: ISkill) => (
              <Card
                key={item.key}
                className="skillCol"
                style={{ backgroundColor: item.color || "#d3adf7" }}
              >
                <Text strong>{item.title}</Text>
                <Fragment>
                  {item.children && item.children.length > 0 && (
                    <Col>
                      {renderItem(item.children)}
                    </Col>
                  )}
                </Fragment>
              </Card>
            ))}
          </MasonryLayout>
        )}
      </Media>
      )
  }

  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="container">
        <Title level={1} className="antdTitle">Skills</Title>
        {renderItem(skills)}
      </div>
    </div >
  )
}