import React from 'react'
import { Layout, Tabs, Avatar, Menu } from 'antd';

import ContractInfo from '../../../components/ContractInfo/ContractInfo'
import AddOptions from '../../../common/AddOptions'
const { TabPane } = Tabs;
function Contract() {
    return (
        <Tabs>
                  <TabPane tab="Hoạt động hợp tác" key="1">
                    <ContractInfo />
                  </TabPane>
                  <TabPane tab="Thông tin đối tác" key="2">
                    <AddOptions />
                  </TabPane>
                </Tabs>
    )
}

export default Contract
