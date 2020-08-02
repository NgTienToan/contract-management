import React, { useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import style from './FormAddOption.css'
import * as actions from '../store/actions';
import { connect } from 'react-redux';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormAddOptions = (props) => {

  const [form] = Form.useForm();




  const onFinish = values => {
    props.addToTable(values)
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="country" label="Quốc Gia" rules={[{ required: true }]} >
        <Input />

      </Form.Item>

      <Form.Item name="land" label="Châu Lục" rules={[{ required: true }]}>
        <Select
          placeholder="Chọn châu lục"
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
export default connect(mapStateToProps, mapDispatchToProps)(FormAddOptions);