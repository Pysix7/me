import React from 'react';
/* USE OUTLINED */
import {
  HomeOutlined,
  ProfileOutlined,
  ToolOutlined,
  GlobalOutlined,
  FileOutlined
} from '@ant-design/icons';
import { MenuConfig } from '~/interface';

const menuConfig: MenuConfig[] = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlined />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <ProfileOutlined />,
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <ToolOutlined />
  },
  {
    title: 'Social Links',
    path: '/socials',
    icon: <GlobalOutlined />
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <FileOutlined />
  },
]
export default menuConfig;