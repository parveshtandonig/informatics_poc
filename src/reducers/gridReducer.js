import * as actionType from '../actions'

const INIT_STATE = {gridInfo:[1,2,3]} 

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case actionType.GRIDINFO:
      return {
        ...state,
        gridInfo:action.gridInfo
      }
    default:
      return state
  }
}

export default reducer