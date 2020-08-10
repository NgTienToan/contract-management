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

const FormAddSign = (props) => {

  const [form] = Form.useForm();




  const onFinish = values => {
    props.addSignEmployeeToTable(values)
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="name" label="Tên người kí" rules={[{ required: true }]} >
        <Input />

      </Form.Item>

      <Form.Item name="role" label="Chức vụ" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn chức vụ"
          //   onChange={onGenderChange}
          allowClear

        >
          <Option value="Khoa1">Chủ nhiệm khoa</Option>
          <Option value="Khoa2">Phó chủ nhiệm khoa</Option>
          <Option value="Giang Vien">Giảng viên</Option>
        </Select>
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
  signEmployee : state.formEdit.signEmployee
})
const mapDispatchToProps = dispatch => ({
  addSignEmployeeToTable: (signEmployee) => dispatch(actions.addSignEmployeeToTable(signEmployee)),
})
export default connect(mapStateToProps, mapDispatchToProps)(FormAddSign);