import React from 'react'
import { Card } from 'antd';

function index() {
    return (
        <>
            <h2>Danh sách các hợp đồng cần sắp hết hạn</h2>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', marginTop: 30}}>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 350 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 350 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 350 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                
            </div>
        </>
    )
}

export default index
