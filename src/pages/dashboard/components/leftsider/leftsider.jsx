import React from "react";
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './leftsider.less'

const { SubMenu } = Menu;
const { Sider } = Layout

export const LeftSider = () => {

    return (
        <Sider className="left-sider">
            <div className="left-sider-title" onClick={() => window.location.reload(true)}>
                <Link className="left-sider-title" to='/dashboard/welcome'>Management System</Link>
            </div>
            <Menu mode="vertical" theme="dark">
                <Menu.Item key="0" icon={<MailOutlined />}>
                    <Link to='/dashboard/users'>Users</Link>
                </Menu.Item>
                <Menu.Item key="1" icon={<MailOutlined />}>
                    <Link to='/dashboard/goods'>Goods</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

