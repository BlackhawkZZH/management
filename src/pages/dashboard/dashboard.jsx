import React, { useEffect } from "react";
import { Layout } from 'antd';

import DashBoardHeader from './components/header/header'
import './dashboard.less'
import { LeftSider } from "./components/leftsider/leftsider";
import { MainContent } from "./components/content/content";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'
const { Footer } = Layout;

const DashBoard = (props) => {
  const nav = useNavigate()
  useEffect(() => {
    if (props.user?.username === undefined) nav('../login')
  }, [props.user?.username])

  return (
    <Layout>
      <LeftSider />
      <Layout>
        <DashBoardHeader />
        <MainContent />
        <Footer>
          <span>This is footer and you can put some text in there.</span>
        </Footer>
      </Layout>
    </Layout>
  )

}

const mapStateToProps = (state) => {
  console.log(36, state)
  return {
    user: state.user
  }
}
// get data

const mapDispatchToProps = (dispatch) => {

}
//operate data


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)

//connect to redux