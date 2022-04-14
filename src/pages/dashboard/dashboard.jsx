import React from "react";
import { Layout } from 'antd';

import { DashBoardHeader } from './components/header/header'
import './dashboard.less'
import { LeftSider } from "./components/leftsider/leftsider";
import { MainContent } from "./components/content/content";

const { Footer, Content } = Layout;

export const DashBoard = () => {

    return(
    <Layout>
        <LeftSider />
        <Layout>
          <DashBoardHeader/>
          <MainContent/>
          <Footer>Footer</Footer>
        </Layout>
    </Layout>
    )     
    
}