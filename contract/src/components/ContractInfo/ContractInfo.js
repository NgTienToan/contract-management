import React from 'react'
import ContractSelect from './ContractSelect'
import ContractInfoTable from './ContractInfoTable'
import AddPartnerOptions from '../PartnerInfo/AddPartnerOptions'
function ContractInfo() {
    return (
        <div>
            {/* <AddPartnerOptions/> */}
            <ContractSelect />
            <ContractInfoTable/>
        </div>
    )
}

export default ContractInfo
