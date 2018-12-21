import { ADDUSER, GRIDINFO, EDITUSER, DELETEUSER } from '../actions'

const INIT_STATE = {
	gridInfo: [
		{
			"id": 1,
			"name_val": 3,
			"order_date": "1517489967",
			"unit": 20,
			"discount": "1",
			"in_stock": "yes"
		},
		{
			"id": 2,
			"name_val": 2,
			"order_date": "1557759408",
			"unit": 14,
			"discount": "1",
			"in_stock": "yes"
		},
		{
			"id": 3,
			"name_val": 5,
			"order_date": "1566011847",
			"unit": 6,
			"discount": "0",
			"in_stock": "no"
		},
		{
			"id": 4,
			"name_val": 3,
			"order_date": "1545955356",
			"unit": 8,
			"discount": "0",
			"in_stock": "no"
		}
	],
	products: [
		{
			"id": 1,
			"name": 'Product 1'
		},
		{
			"id": 2,
			"name": 'Product 2'
		},
		{
			"id": 3,
			"name": 'Product 3'
		},
		{
			"id": 4,
			"name": 'Product 4'
		},
		{
			"id": 5,
			"name": 'Product 5'
		},
	]

}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case GRIDINFO:
			return {
				...state,
				gridInfo: action.gridInfo
			}
		case ADDUSER:
			return {
				...state,
				gridInfo: [...state.gridInfo, action.info]
			}
		case EDITUSER:
			const index = state.gridInfo.findIndex((user) => user.id === action.info.id);
			state.gridInfo[index] = action.info;
			return {
				...state,
				gridInfo: [...state.gridInfo]
			}
		case DELETEUSER:
			return {
				...state,
				gridInfo: state.gridInfo.filter((user) => user.id != action.info.id)
			}
		default:
			return state
	}
}

export default reducer