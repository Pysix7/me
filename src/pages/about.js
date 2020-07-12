import Link from 'next/link'
export default () => (
  <div style={{ padding: '25px' }}>
    <div>About us</div>
    <div>Back to <Link href='/' as={ process.env.LINK_PREFIX + '/'}><a>Home</a></Link></div>
  </div>
)
