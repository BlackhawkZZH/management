import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { Layout } from 'antd';


import DashBoardHeader from './components/header/header'
import { LeftSider } from "./components/leftsider/leftsider";
import { MainContent } from "./components/content/content";
import { connect } from "react-redux";

import './dashboard.less'


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
  return {
    user: state.user
  }
}
// get data

const mapDispatchToProps = (dispatch) => {
  return {}
}
//operate data


export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
//connect to redux