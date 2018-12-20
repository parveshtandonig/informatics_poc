import {GRIDINFO, ADDUSER, EDITUSER} from './action.type'

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

export const editUserInfo = (info) => {
    console.log(info)
    return {
        type:EDITUSER,
        info
    }
}