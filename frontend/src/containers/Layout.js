import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" style={{ textAlign: "left" }}>
                    <h1 style={{ color: "white" }}>LabLift - Teste Técnico</h1>
                </Menu>
            </Header>

            <Content style={{ padding: '0 10px' }}>
                <div className="site-layout-content" type="flex" justify="center" align="middle" style={{ background: '#fff', padding: 24, minHeight:'84.5vh'}}>
                    {props.children}
                </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
                DevelopED ©2021 Created by Esdras Dutra
            </Footer>

        </Layout>
    );
}

export default CustomLayout;