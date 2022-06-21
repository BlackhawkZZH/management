import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";


const { Content } = Layout;

export const MainContent = () => {
  return (
    <Content><Outlet /></Content>
  )
}
