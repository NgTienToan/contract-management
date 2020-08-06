import React, { useState } from 'react';
import { Menu, Dropdown, message, Button } from 'antd';
import { CaretDownOutlined , UpOutlined} from '@ant-design/icons';
import FormAddPartner from '../FormAddOptions/FormAddPartner'


function AddOptions() {
    const [toggle, setToggle] = useState()

    const menu = (
        <Menu>
            <Menu.Item key="1"
                onClick={()=>setToggle(1)}
            >
                Thêm đơn vị theo dõi
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
                                <FormAddPartner/>
                            </div> 
                    : null
            }
        </div>
    )
}

export default AddOptions