import React from 'react'
import { Layout, Tabs, Avatar, Menu } from 'antd';
import EdittableCountry from './EdittableCountry'
import PartnerEmployee from './PartnerEmployee'
import SignEmployee from './SignEmployee'
import AddOptions from '../../common/AddOptions'
import AddOptionEmployee from '../AddOptions/AddOptionEmployee'

const { TabPane } = Tabs;
function Setting() {
    return (
        <Tabs type="card">
            <TabPane tab="Quốc Gia" key="1">
                <AddOptions />
                <EdittableCountry />

            </TabPane>
            <TabPane tab="Người kí" key="2">
                
                <SignEmployee />
            </TabPane>
            <TabPane tab="Đơn vị theo dõi" key="3">
                <AddOptionEmployee/>
                <PartnerEmployee />
            </TabPane>

        </Tabs>
    )
}

export default Setting;
