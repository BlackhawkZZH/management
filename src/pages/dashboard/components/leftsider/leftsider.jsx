import React from "react";
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './leftsider.less'

const { SubMenu } = Menu;
const { Sider } = Layout

export const LeftSider = () => {
  return (
    <Sider className="left-sider">
      <Menu mode="vertical" theme="dark">
        <Menu.Item key="0">
          <Link className="left-sider-title" to='welcome'>Management System</Link>
        </Menu.Item>
        <Menu.Item key="1" icon={<MailOutlined />}>
          <Link to='users'>Users</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to='goods'>Goods</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

