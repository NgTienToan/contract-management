import * as actionTypes from '../actionTypes'

const initialState = {
  allContract: []
}

const filterContract = (state, action) => {
  let result = [];


}




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_CONTRACT: return filterContract(state, action);
    default: return state;
  }
}

export default reducer;