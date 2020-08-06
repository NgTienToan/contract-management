import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



const PartnerInfoAddForm = (props) => {

  const [form] = Form.useForm();

  const onFinish = values => {
    props.addToTable(values)
  };

  const onReset = () => {
    form.resetFields();
  };



  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="partnerName" label="Tên đối tác" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="country" label="Quốc Gia" rules={[{ required: true }]} >
        <Select placeholder="Chọn Quốc Gia" allowClear>
           {this.props.country.map(item => {
             return <Option value={item.country} ></Option>
           })}
        </Select>

      </Form.Item>
      <Form.Item name="ceo" label="Giám Đốc" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />

      </Form.Item>
      <Form.Item name="phone" label="Số điện thoại" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="adress" label="Địa chỉ" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="website" label="Website" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset} style={{ marginLeft: 10 }}>
          Reset
        </Button>

      </Form.Item>
    </Form>
  );
};
const mapStateToProps = state => ({
  country : state.formEdit.currentCountry
})
const mapDispatchToProps = dispatch => ({
  // addToTable: (country) => dispatch(actions.addToTable(country)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PartnerInfoAddForm);