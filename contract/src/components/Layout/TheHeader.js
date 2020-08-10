import React from 'react'
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;


const menu = (
    <Menu style={{padding: 10}}>
        <Menu.Item key="0">
            <a>Profile</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a>Logout</a>
        </Menu.Item>
        <Menu.Divider />
        
    </Menu>
);

function TheHeader() {
    return (
        <Header className="site-layout-background-header"  >

            <Dropdown overlay={menu} trigger={['click']} >
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar size={45} icon={<UserOutlined />} />
                </a>
            </Dropdown>,
            

        </Header>
    )
}

export default TheHeader
