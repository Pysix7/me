import Link from 'next/link'
export default () => (
  <div>Hello World. <Link href='/about' as={ process.env.LINK_PREFIX + '/about'}><a>About</a></Link></div>
)
