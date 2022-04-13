import React from "react";
import { Layout } from 'antd';

import { DashBoardHeader } from './components/header/header'
import './dashboard.less'

const { Footer, Sider, Content } = Layout;

export const DashBoard = () => {

    return(
    <Layout>
        <Sider className="left-sider">Sider</Sider>
        <Layout>
          <DashBoardHeader/>
          <Content>This is dashboard</Content>
          <Footer>Footer</Footer>
        </Layout>
    </Layout>
    )     
    
}