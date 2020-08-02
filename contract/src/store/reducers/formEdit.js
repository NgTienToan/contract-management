import * as actionTypes from '../actionTypes'

const initialState = {
  currentCountry: null,
  currentSignEmployee : null,
  currentParent : null
}

const addToTable = (state, action) => {
  console.log(action.country);
  return {
    currentCountry: action.country
  }
}

const addSignEmployeeToTable = (state, action) => {
  console.log(action.signEmployee);
  return {
    currentSignEmployee: action.signEmployee
  }
}

const addPartnerToTable = (state, action) => {
  console.log(action.partner);
  return {
    currentParent: action.partner
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COUNTRY_TO_TABLE: return addToTable(state, action);
    case actionTypes.ADD_SIGN_EMPLOYEE_TO_TABLE: return addSignEmployeeToTable(state, action);
    case actionTypes.ADD_PARTNER_TO_TABLE: return addPartnerToTable(state, action);
    default: return state;
  }
}

export default reducer;