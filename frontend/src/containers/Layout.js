import React from 'react';
import { Layout} from 'antd';
const {Content, Footer } = Layout;
const CustomLayout = (props) =>{
    return (
        <Layout className="layout">
        <Content style={{ padding: '0 50px', textAlign: 'center'}}>
            <h1> Hello World! </h1>
            {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>LabLift ©2021 Created by Esdras Dutra</Footer>
        </Layout>
    );
}

export default CustomLayout;