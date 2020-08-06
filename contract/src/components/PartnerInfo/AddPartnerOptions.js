import React, { useState } from 'react';
import { Menu, Dropdown, message, Button } from 'antd';
import { DownOutlined, CaretDownOutlined , UpOutlined} from '@ant-design/icons';

import PartnerInfoAddForm from './PartnerInfoAddForm'


function AddOptions() {
    const [toggle, setToggle] = useState()

    const menu = (
        <Menu>
            <Menu.Item key="1"
                onClick={()=>setToggle(1)}
            >
                Thêm đối tác
            </Menu.Item>
            
        </Menu>
    );

    return (
        <div className="addOption">
            <Dropdown
                overlay={menu}
            >
                <a className="addOption-a">
                    Thêm/Tùy chọn <CaretDownOutlined />
                </a>
            </Dropdown>
            {toggle ?   
                            <div >                
                                <Button   onClick={()=>setToggle(false)}><UpOutlined /></Button>
                                <PartnerInfoAddForm />
                            </div> 
                    : null
            }
        </div>
    )
}

export default AddOptions