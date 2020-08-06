import React, { useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { UpOutlined } from '@ant-design/icons';
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

const FormAddPartner = (props) => {

  const [form] = Form.useForm();




  const onFinish = values => {
    props.addPartnerToTable(values)
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="namePartner" label="Đơn vị theo dõi" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="accName" label="Tên đăng nhập" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="passwordPartner" label="Mật khẩu" rules={[{ required: true }]} >
        <Input type="password" />

      </Form.Item>
      <Form.Item name="repasswordPartner" label="Nhập lại mật khẩu" rules={[{ required: true }]} >
        <Input type="password" />

      </Form.Item>
      <Form.Item name="namePartner1" label="Tên đơn vị theo dõi" rules={[{ required: true }]} >
        <Input />

      </Form.Item>
      <Form.Item name="namePartnershort" label="Tên viết tắt" rules={[{ required: true }]} >
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
  partner: state.formEdit.partner
})
const mapDispatchToProps = dispatch => ({
  addPartnerToTable: (partner) => dispatch(actions.addPartnerToTable(partner)),
})
export default connect(mapStateToProps, mapDispatchToProps)(FormAddPartner);