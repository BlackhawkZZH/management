import React from "react";
import { Layout, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout

export const LeftSider = () => {
    function handleClick(e) {
        console.log('click', e);
    }

    return (
        <Sider className="left-sider"><Menu onClick={handleClick} style={{ width: 200 }} mode="vertical">
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
                <Link to='/dashboard/users'></Link>
                Users
            </Menu.Item>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu></Sider>
    )
}

