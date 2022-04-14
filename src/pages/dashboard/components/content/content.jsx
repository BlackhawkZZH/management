import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export const MainContent = () => {
    return (
        <Content><Outlet /></Content>
    )
}