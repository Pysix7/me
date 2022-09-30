import Head from 'next/head';
import { Fragment } from 'react';
import { Col, Typography, Card } from 'antd';
import profileData from '~/configs/data';
import { ISkill } from '~/interface';

import '~/layouts/skills.less';

const { Title, Text } = Typography;

export default () => {
  const { skills } = profileData;
  const renderItem = (data: any) => {
    return (
      <div>
        {data.map((item: ISkill) => (
          <Col
            span={24}
            key={item.key}
            className="skillCol"
            style={{ borderColor: item.color || "#d3adf7" }}
          >
            <div>
              <Text strong>{item.title}</Text>
            </div>
            <Fragment>
              {item.children && item.children.length > 0 && (
                <Col>
                  {renderItem(item.children)}
                </Col>
              )}
            </Fragment>
          </Col>
        ))}
      </div >
    )
  };

  return (
    <div>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="container">
        <Title level={1} className="antdTitle">Skills</Title>
        <Card
          className="card"
          bodyStyle={{ overflow: 'hidden' }}
        >
          {renderItem(skills)}
        </Card>
      </div>
    </div >
  )
}