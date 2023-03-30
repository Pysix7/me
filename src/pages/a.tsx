import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import { Col, Typography, Card } from 'antd';
const { Title, Text } = Typography;


export default () => {

  useEffect(()=>{
    setTimeout(()=>
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s&ab_channel=RickAstley'),
       2000)
  },
    []);

  return (
    <div className="rr-container">
      <Head>
        <title>😁</title>
      </Head>
      <Title level={1} className="antdTitle">😁GOT YOU😁</Title>
    </div >
  )
}