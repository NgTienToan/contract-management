import React, { useEffect } from 'react'
import { Select } from 'antd';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
}



function MutiSelect(props) {
    useEffect(() => {
        console.log(props.signEmployee)
        console.log('hello')
    }, [])

    return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Tìm kiếm người kí"
            // defaultValue={['china']}
            onChange={handleChange}
            optionLabelProp="label"
        >
            {/* {props.signEmployee.map(item => {
                return <Option value={item}></Option>
            })} */}
        </Select>
    )
}

const mapStateToProps = state => ({
    signEmployee: state.formEdit.currentSignEmployee
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(MutiSelect);
