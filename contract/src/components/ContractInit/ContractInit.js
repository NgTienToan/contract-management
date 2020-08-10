import React, { useState } from 'react';
import { Drawer, Form, Button, Radio, Input, Select, DatePicker, Checkbox } from 'antd';
import MutiSelect from '../../common/MutiSelect/MutiSelect'
import { PlusOutlined } from '@ant-design/icons';


import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const { TextArea } = Input


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const ContractInit = (props) => {
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(1)

    const [form] = Form.useForm();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    const onChange1 = (e) => {
        console.log('radio checked', e.target.value);

        setValue(e.target.value)
    }
    const onFinish = values => {
        // console.log(values)
        props.addContractToTable(values)
    }
    // const dateFormat = 'YYYY/MM';
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> Tạo hợp đồng mới
            </Button>
            <Drawer
                title="Tạo hợp đồng mới"
                width={640}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
              </Button>
                        <Button onClick={onClose} type="primary" >
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form {...layout} onFinish={onFinish}>
                    <Form.Item name="partnerName" label="Tên cơ quan hợp tác" rules={[{ required: false }]} >
                        <Input />

                    </Form.Item>
                    <Form.Item name="b" label="Cấp kí kết" rules={[{ required: false }]} >
                        <Input />

                    </Form.Item>
                    <Form.Item name="c" label="Người kí(VNU-UET)" rules={[{ required: false }]} >
                        <MutiSelect />

                    </Form.Item>
                    <Form.Item name="signEmployee" label="Đơn vị theo dõi" rules={[{ required: false }]} >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Checkbox onChange={onChange} style={{ marginLeft: 8 }}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                            <Checkbox onChange={onChange}>Điện tử viễn thông</Checkbox>
                        </div>

                    </Form.Item>
                    <Form.Item name="content" label="Nội dung chính" rules={[{ required: false }]} >
                        <TextArea />

                    </Form.Item>
                    <Form.Item name="note" label="Lưu ý" rules={[{ required: false }]} >
                        <TextArea />

                    </Form.Item>
                    <Form.Item name="renew" label="Tự động Renew">
                        <Radio.Group onChange={onChange1} value={value}>
                            <Radio value={'yes'}>Có</Radio>
                            <Radio value={'no'}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="h" label="Giá trị HĐ" rules={[{ required: false }]} >
                        <Input />

                    </Form.Item>
                    <Form.Item name="date" label="Ngày kí" rules={[{ required: false }]} >
                        <DatePicker  />

                    </Form.Item>
                    <Form.Item name="k" label="Ngày hết hiệu lực" rules={[{ required: false }]} >
                        <DatePicker />

                    </Form.Item>
                    <Form.Item name="l" label="" >

                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={onClose}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}


const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  addContractToTable: (contract) => dispatch(actions.addContractToTable(contract)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContractInit);