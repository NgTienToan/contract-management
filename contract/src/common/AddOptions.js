import React, { useState } from 'react';
import { Menu, Dropdown, message, Button } from 'antd';
import { DownOutlined, CaretDownOutlined , UpOutlined} from '@ant-design/icons';
import FormAddOptions from './FormAddOptions'
import style from './AddOptions.css'

function AddOptions() {
    const [toggle, setToggle] = useState()

    const menu = (
        <Menu>
            <Menu.Item key="1"
                onClick={()=>setToggle(1)}
            >
                Thêm Quốc Gia
            </Menu.Item>
            <Menu.Item key="2"
                onClick={()=>setToggle(2)}
            >
                Thêm b
            </Menu.Item>
            <Menu.Item key="3"
                onClick={()=>setToggle(3)}
            >
                Thêm c
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
                                <FormAddOptions/>    
                            </div> 
                    : null
            }
        </div>
    )
}

export default AddOptions
