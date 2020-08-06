import React, { useState } from 'react';
import { Menu, Dropdown, message, Button } from 'antd';
import { DownOutlined, CaretDownOutlined , UpOutlined} from '@ant-design/icons';
import FormAddOptions from './FormAddOptions'
import style from './AddOptions.css'
import PartnerInfoAddForm from '../components/PartnerInfo/PartnerInfoAddForm'


function AddOptions() {
    const [toggle, setToggle] = useState()

    const menu = (
        <Menu>
            <Menu.Item key="1"
                onClick={()=>setToggle(1)}
            >
                Thêm Quốc Gia
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
                                {/* <PartnerInfoAddForm /> */}
                            </div> 
                    : null
            }
        </div>
    )
}

export default AddOptions