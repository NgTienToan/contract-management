import React from 'react'
import { Layout, Tabs, Avatar, Menu } from 'antd';
import AddOptions from '../../common/AddOptions'
import AddOptionSign from '../AddOptions/AddOptionSign'
import ContractInfo from './ContractInfo'
import ContractInit from '../ContractInit/ContractInit';

const { TabPane } = Tabs;
function Contract() {
    return (
        <Tabs type="card">
            <TabPane tab="Danh sách hợp đồng" key="1">
                <AddOptions />
                <ContractInfo/>
            </TabPane>
            <TabPane tab="Đối tác" key="2">
                <AddOptionSign />
            </TabPane>
            <TabPane tab="Đối tác" key="3">
                <ContractInit />
            </TabPane>
        </Tabs>
    )
}

export default Contract;
