import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import './header.less'
import axios from "axios";
const { Header } = Layout;

export const DashBoardHeader = () => {
    const [curTemp, setCurTemp] = useState();

    useEffect(() => {

        const getTemp = () => {
            axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
                .then(response => {
                    setCurTemp(response.data.dataseries[0].temp2m)
                    console.log(15, response.data.dataseries[0].temp2m)
                })
        }
        getTemp();
        const timer = setInterval(getTemp, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    
    return (
        <Header className="dashboard-header">{`${curTemp} ℃`}</Header>
    )
}