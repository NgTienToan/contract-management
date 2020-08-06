import React from 'react';

import { Layout } from 'antd';
import style from './Layout.css'
import SideMenu from './SideMenu';
import TheHeader from './TheHeader'
import Footer from './Footer';

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu className="sideMenu"/>
      <Layout className="site-layout">
        <TheHeader ></TheHeader>
        <Content style={{ margin: '20px 16px' , padding: 24 , minHeight : 280}} className="site-layout-background">{children}</Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
