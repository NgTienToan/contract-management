import React from 'react'
import { Layout, Menu ,Avatar} from 'antd';
import EditableTable from '../components/EditableTable '
import AddOptions from '../common/AddOptions'
import style from './Layout.css'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined ,
  NotificationOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={"site-sidebar"}>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between'}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            
            <Avatar size="large" className="avt"  icon={<UserOutlined />} />

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
              <AddOptions/>
            <EditableTable />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo