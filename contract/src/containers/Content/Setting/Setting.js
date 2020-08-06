import React from 'react'
import { Layout, Tabs, Avatar, Menu } from 'antd';
import AddOptions from '../../../common/AddOptions'
import EdittableCountry from '../../../components/EdittableCountry/EdittableCountry'
import SignEmployee from '../../../components/EdittableEmployee/SignEmployee'
import PartnerEmployee from '../../../components/EdittableEmployee/PartnerEmployee'
const { TabPane } = Tabs;
function Setting() {
    return (
        <Tabs type="card">
                  <TabPane tab="Quốc Gia" key="1">
                    <AddOptions
                      
                    />
                    <EdittableCountry />
                   
                  </TabPane>
                  <TabPane tab="Người kí" key="2">
                    <AddOptions 
      
                    />
                    <SignEmployee />
                  </TabPane>
                  <TabPane tab="Đơn vị theo dõi" key="3">
                    <PartnerEmployee />
                  </TabPane>

                </Tabs>
    )
}

export default Setting
