import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

import {
  DeleteOutlined,
  FormOutlined
} from '@ant-design/icons';

import * as actions from '../../store/actions';
import { connect } from 'react-redux';
const originData = [
      // {
      //   key: '1',
      //   country: 'Mỹ',
      //   land: 'Châu Mỹ',   
      // },
      // {
      //   key: '2',
      //   country: 'Nhật Bản',
      //   land: 'Châu Á',
      // },
      // {
      //   key: '3',
      //   country: 'Đức',
      //   land: 'Châu Âu',
      // },
      // {
      //   key: '4',
      //   country: 'Mỹ',
      //   land: 'Châu Mỹ',   
      // },
      // {
      //   key: '5',
      //   country: 'Nhật Bản',
      //   land: 'Châu Á',
      // },
      // {
      //   key: '6',
      //   country: 'Đức',
      //   land: 'Châu Âu',
      // },{
      //   key: '7',
      //   country: 'Mỹ',
      //   land: 'Châu Mỹ',   
      // },
      // {
      //   key: '8',
      //   country: 'Nhật Bản',
      //   land: 'Châu Á',
      // },
      // {
      //   key: '9',
      //   country: 'Đức',
      //   land: 'Châu Âu',
      // },{
      //   key: '10',
      //   country: 'Mỹ',
      //   land: 'Châu Mỹ',   
      // },
      // {
      //   key: '11',
      //   country: 'Nhật Bản',
      //   land: 'Châu Á',
      // },
      // {
      //   key: '12',
      //   country: 'Đức',
      //   land: 'Châu Âu',
      // }
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EdittableCountry = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  useEffect(() => {
    if(props.country != null){
    setData([...data, props.country])}
  }, [props.country])

  useEffect(() => {
    console.log(data.length)

  }, [])

  const handleDelete = async (key) => {
    // const originData = [...originData];
    await setData(data.filter(item => item.key !==key));
    console.log(data)
  };

  
  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  

  const columns =             [
    {
      title: 'Quốc Gia',
      dataIndex: 'country',
      width: '35%',
      editable: true,
    },
    {
      title: 'Châu Lục',
      dataIndex: 'land',
      width: '35%',
      editable: true,
    },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '15%',
      render: (_, record) => {
        const editable = isEditing(record);
         return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            <FormOutlined size="35px"/>
          </a>
        );
      },
    },
    {
        title: 'Xóa',
        dataIndex: 'delete',
        width: '15%',
        render: (text, record) =>{
          console.log(data)
        return data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={()=>handleDelete(record.key)}>
            <a><DeleteOutlined/></a>
          </Popconfirm>
        ) : null}
    }
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
const mapStateToProps = state => ({
  country: state.formEdit.currentCountry
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(EdittableCountry);