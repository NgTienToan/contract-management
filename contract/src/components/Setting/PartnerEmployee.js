import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

import {
    DeleteOutlined,
    FormOutlined
  } from '@ant-design/icons';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const { Search } = Input;
const originData = [
    // {
    //     key: '1',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '2',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '3',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '4',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '5',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '6',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '7',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '8',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '9',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },
    //   {
    //     key: '10',
    //     name: 'Nguyễn Tiến Toàn',
    //     role: 'Châu Mỹ',
    //     unit: 'FIT'   
    //   },

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

const SignEmployee = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
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
    if(props.partner != null){
    setData([...data, props.partner])}
  }, [props.partner])

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

  const columns = [
    {
        title: 'Mã đơn vị theo dõi',
        dataIndex: data.length +1,
        width: '15%',
        editable: true,
    },
    {
      title: 'Đơn vị theo dõi',
      dataIndex: 'namePartner',
      width: '30%',
      editable: true,
    },
    {
      title: 'Tên viết tắt',
      dataIndex: 'namePartnershort',
      width: '20%',
      editable: true,
    },
    {
        title: 'Account',
        dataIndex: 'accName',
        width: '15%',
        editable: true,
      },
    {
      title: 'Sửa',
      dataIndex: 'operation',
      width: '10%',
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
            <FormOutlined />
          </a>
        );
      },
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      width: '10%',
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
    <Form form={form} component={false} style={{border: 1}}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        // bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        title={() =>
          <div style={{display: 'flex', justifyContent:'space-between'}}>
            <p style={{fontSize: 18, }}>Đơn vị theo dõi</p>
            <Search
              placeholder="Search for ..."
              onSearch={value => console.log(value)}
              style={{ width: 250 }}
            />
          </div>
        }
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
const mapStateToProps = state => ({
  partner: state.formEdit.currentParent
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(SignEmployee);