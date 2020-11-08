import React from 'react';
/* USE OUTLINED */
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined
} from '@ant-design/icons';
import { SocialLink } from '~/interface';

const SocialLinks: SocialLink[] = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prathap-k-923312168',
    icon: <LinkedinOutlined />,
  },
  {
    title: 'Github',
    url: 'https://www.github.com/pysix7',
    icon: <GithubOutlined />,
  },
  // {
  //   title: 'Instagram',
  //   url: '',
  //   icon: <InstagramOutlined />,
  // },
]
export default SocialLinks;