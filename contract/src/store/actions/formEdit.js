import * as actions from '../actionTypes'

export const addToTable = (country) => {
  return ({
    type: actions.ADD_COUNTRY_TO_TABLE,
    country
  })
}

export const addSignEmployeeToTable = (signEmployee) => {
  return ({
    type: actions.ADD_SIGN_EMPLOYEE_TO_TABLE,
    signEmployee
  })
}

export const addPartnerToTable = (partner) => {
  return ({
    type: actions.ADD_PARTNER_TO_TABLE,
    partner
  })
}

