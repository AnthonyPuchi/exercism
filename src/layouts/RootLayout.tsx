import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GlobalOutlined,
    VideoCameraOutlined, BankOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import {Space} from "antd/lib";
import {NavLink, Outlet} from "react-router-dom";
const { Header, Sider, Content } = Layout;



 const RootLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <BankOutlined />,
                            label:(<NavLink to="/">Home</NavLink>),
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/twofer">TwoFer</NavLink>),
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/resistorduo">ResistorDuo</NavLink>),
                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/resistortrio">ResistorTrio</NavLink>),
                        },
                        {
                            key: '5',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/leap">Leap</NavLink>),
                        },
                    ]}
                />
            </Sider>
            <Layout >
                <Header style={{ padding: 0, background: colorBgContainer }}>

                    <Space>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h1 >RICK AND MORTY</h1>
                    </Space>
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
<Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default RootLayout;