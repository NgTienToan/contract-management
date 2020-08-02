import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
}

function ContractSelect() {
    return (
        <>
            <Select defaultValue="all" style={{ width: 300, marginBottom: 40}} onChange={handleChange}>
                <Option value="all">Tất cả hợp đồng</Option>
                <Option value="fauclty">Hợp đồng theo khoa</Option>
                <Option value="partner">Hợp đồng theo đối tác</Option>
            </Select>
            
        </>
    )
}

export default ContractSelect
