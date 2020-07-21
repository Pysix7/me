import Router from 'next/router';
import Head from 'next/head';

import { Button } from 'antd';

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    Welcome to My Portfolio.<br />
    Prathap<br/>
    <Button
      type="primary"
      onClick={() => {
        Router.push('/about', process.env.LINK_PREFIX + '/about')
      }}
    >Go to About</Button>
    {/* <Link href='/about' as={process.env.LINK_PREFIX + '/about'}>
        <a>About</a>
      </Link> */}
  </div >
)
