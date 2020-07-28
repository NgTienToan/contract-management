import React, { useState } from 'react';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined, CaretDownOutlined } from '@ant-design/icons';
import FormAddOptions from './FormAddOptions'
import style from './AddOptions.css'

function AddOptions() {
    const [toggle, setToggle] = useState(false)
    const onClick = (toogle) => {
        setToggle(toogle)
        
    };

    const menu = (
        <Menu>
            <Menu.Item key="1"
                onClick={onClick}
            >
                Thêm Quốc Gia</Menu.Item>
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
            {toggle ? <FormAddOptions/> : <div></div>}
        </div>
    )
}

export default AddOptions
