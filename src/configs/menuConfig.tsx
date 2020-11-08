import React from 'react';
/* USE OUTLINED */
import {
  // HomeOutlined,
  ProfileOutlined,
  ToolOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';
import { MenuConfig } from '~/interface';

const menuConfig: MenuConfig[] = [
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <HomeOutlined />,
  // },
  {
    title: 'About',
    path: '/',
    icon: <ProfileOutlined />,
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <ToolOutlined />
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AppstoreAddOutlined />
  },
]
export default menuConfig;