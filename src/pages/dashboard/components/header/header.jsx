import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Layout } from 'antd';


import { getUserInfo } from "../../../../redux/actions/handlers/userActions";

import './header.less'


const { Header } = Layout;

export const DashBoardHeader = (props) => {
  const nav = useNavigate()
  const [curTemp, setCurTemp] = useState();

  useEffect(() => {
    const getTemp = () => {
      axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
        .then(response => {
          setCurTemp(response.data.dataseries[0].temp2m)
        })
    }
    getTemp();
    const timer = setInterval(getTemp, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const logoutHandeler = () => {
    props.killUserData(null)
    nav('../login')
  }

  return (
    <Header className="dashboard-header">
      <div className="dashboard-info">
        <span>{`${curTemp} ℃`}</span>
        <span>This is header and you can put some text in here.</span>
      </div>
      <div className="dashboard-usr-info">
        <span>{`Welcome, ${props.user?.username}！`}</span>
        <button className="dashboard-usr-info-logout" onClick={logoutHandeler}>Logout</button>
      </div>
    </Header>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
// get data

const mapDispatchToProps = (dispatch) => {
  return {
    killUserData: (user) => {
      dispatch(getUserInfo(user))
    }
  }
}
//operate data

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardHeader)
//connect to redux