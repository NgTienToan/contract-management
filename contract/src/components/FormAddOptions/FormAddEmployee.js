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

const FormAddEmployee = (props) => {

  const [form] = Form.useForm();




  const onFinish = values => {
    props.addToTable(values)
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="name" label="Tên người kí" rules={[{ required: true }]} >
        <Input />

      </Form.Item>

      <Form.Item name="role" label="chức vụ" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn chức vụ"
          //   onChange={onGenderChange}
          allowClear

        >
          <Option value="asia">Châu Á</Option>
          <Option value="euro">Châu ÂU</Option>
          <Option value="america">Châu Mỹ</Option>
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

})
const mapDispatchToProps = dispatch => ({
  addToTable: (country) => dispatch(actions.addToTable(country)),
})
export default connect(mapStateToProps, mapDispatchToProps)(FormAddEmployee);