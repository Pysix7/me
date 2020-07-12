import Link from 'next/link';
import Router from 'next/router';

import { Card, Button } from 'antd';

export default () => (
  <div style={{ padding: '25px' }}>
    <Card
      bodyStyle={{ padding: '25px' }}

    >
      Welcome to My Portfolio.<br />
      <Button
        type="primary"
        onClick={() => {
          Router.push('/about', process.env.LINK_PREFIX + '/about')
        }}
      >Go to About</Button>
      {/* <Link href='/about' as={process.env.LINK_PREFIX + '/about'}>
        <a>About</a>
      </Link> */}
    </Card>
  </div >
)
