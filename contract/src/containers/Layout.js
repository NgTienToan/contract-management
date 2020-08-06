import React from 'react'
import { Layout, Tabs, Avatar, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom';
import style from './Layout.css'
import Setting from '../containers/Content/Setting/Setting'
import Contract from '../containers/Content/Contract/Contract'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ContactsOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

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
          <div className="logo" style={{ height: 85 }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/" >Setting</Link>

            </Menu.Item>
            <Menu.Item key="2" icon={<ContactsOutlined />} >
              <Link  to='/contracInfo'>Thông tin hợp đồng</Link>


            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

            <Avatar size="large" className="avt" icon={<UserOutlined />} />

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/"><Setting /></Route>
              <Route path="/contracInfo"><Contract /></Route>
              
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo