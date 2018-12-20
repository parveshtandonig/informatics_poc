import {GRIDINFO, ADDUSER} from './action.type'

export const getGridInfo = (gridInfo) => {
    return {
      type:GRIDINFO,
      gridInfo
    }
}

export const addUserInfo = (info) => {
    return {
        type:ADDUSER,
        info
    }
}