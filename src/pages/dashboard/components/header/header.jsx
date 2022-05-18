import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import './header.less'
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../../redux/actions/handlers/userActions";
const { Header } = Layout;




export const DashBoardHeader = (props) => {
  const nav = useNavigate()
  const [curTemp, setCurTemp] = useState();

  useEffect(() => {

    const getTemp = () => {
      axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
        .then(response => {
          setCurTemp(response.data.dataseries[0].temp2m)
          //console.log(15, response.data.dataseries[0].temp2m)
        })
    }
    getTemp();
    const timer = setInterval(getTemp, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])


  useEffect(()=>{
    if (props.user?.username === undefined) nav('../login')
  },[props.user?.username])

  const logoutHandeler = () => {
    props.killUserData(null)
    nav('../')
  }

  return (
    <Header className="dashboard-header">
      <div className="dashboard-info">
        <span>{`${curTemp} ℃`}</span>
      </div>
      <div className="dashboard-usr-info">
        <span>{`Welcome, ${props.user.username}！`}</span>
        <button className="dashboard-usr-info-logout" onClick={logoutHandeler}>Logout</button>
      </div>
    </Header>
  )
}


const mapStateToProps = (state) => {
  console.log(54, state)
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