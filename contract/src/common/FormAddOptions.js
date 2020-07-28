import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import style from './FormAddOption.css'

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormAddOptions = () => {
  const [form] = Form.useForm();


  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="FormAddOption">
      <Form.Item name="country" label="Quốc Gia" rules={[{ required: true }]} >
        <Input  />
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
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) => {
          return getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null;
        }}
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset} style={{marginLeft: 10}}>
          Reset
        </Button>
        
      </Form.Item>
    </Form>
  );
};
export default FormAddOptions;