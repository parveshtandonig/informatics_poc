import {ADDUSER, GRIDINFO} from '../actions'

const INIT_STATE = {gridInfo:[{'name':'Ram', 'orderDate':'2018-12-20', 'unit':4, 'inStock':'true'}]} 

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case GRIDINFO:
      return {
        ...state,
        gridInfo:action.gridInfo
      }
    case ADDUSER:
      return {
          ...state,
          gridInfo:[action.info, ...state.gridInfo]
        }
    default:
      return state
  }
}

export default reducer