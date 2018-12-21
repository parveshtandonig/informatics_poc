import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaPlus, FaMinus } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

import * as actionType from '../../actions'
import GridRecord from '../../components/grid/gridRecord'

class GridContent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name_val: 5,
            order_date: "1566591226",
            unit: 12,
            discount: "1",
            in_stock: "yes",
            showAddUserUI: false
        }
    }

    renderGridRecord = () => {

        return this.props.gridInfo.map((record, index) => {

            return <GridRecord
                key={record.id}
                id={record.id}
            // name_val={data.name_val}
            // order_date={data.order_date}
            // unit={data.unit}
            // discount={data.discount}
            // in_stock={data.in_stock}
            // newRecord={false}
            />
        })
    }

    addUserUI = (info) => this.setState({ showAddUserUI: info })

    /*addUserInfo = () => {
        let data = {
            name: this.state.name || '',
            orderDate: this.state.orderDate || new Date(),
            unit:this.state.unit || 1,
            inStock:this.state.inStock || true
        }
        this.props.addInfo(data);
    }*/

    render() {

        return (

            <React.Fragment>
                <div className="flex--cont--def user-actions--container">
                    <div className="user-actions--child user-actions--child--a">
                        User({this.props.gridInfo.length})
                    </div>
                    <div className="user-actions--child user-actions--child--b">
                        <FaPlus
                            size={22}
                            style={{ display: this.state.showAddUserUI ? 'none' : 'block' }}
                            onClick={() => this.addUserUI(true)} />
                        <FaMinus
                            size={22}
                            style={{ display: this.state.showAddUserUI ? 'block' : 'none' }}
                            onClick={() => this.addUserUI(false)} />

                    </div>
                    <div className="user-actions--child user-actions--child--c">
                        <FiFilter size={22} />
                    </div>
                    <div className="user-actions--child user-actions--child--d">
                        <input type='text' name='search--filter' id='search--filter' placeholder='Search here' />
                    </div>
                </div>
                <div className="flex--cont--def grid-headers--container">
                    <div className="grid-headers--container--child--def">
                        Name <IoMdArrowDropdown />
                    </div>
                    <div className="grid-headers--container--child--def">
                        Order Date <IoMdArrowDropup />
                    </div>
                    <div className="grid-headers--container--child--def">
                        Unit
                    </div>
                    <div className="grid-headers--container--child--def">
                        discount
                    </div>
                    <div className="grid-headers--container--child--def">
                        in stock
                    </div>
                    <div className="grid-headers--container--child--def">
                        edit-delete
                    </div>
                </div>
                <div style={{ display: this.state.showAddUserUI ? 'block' : 'none' }} className="grid-add-row-container">
                    <GridRecord
                        id={0}
                        name_val=''
                        order_date=''
                        unit={1}
                        discount={0}
                        in_stock=''
                        newRecord={true} />
                </div>
                <div className="grid--rows--container">
                    {this.renderGridRecord()}
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        gridInfo: state.grid.gridInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addInfo: (info) => dispatch(actionType.addUserInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContent)