import React, { Component } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaPlus } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

import {connect} from 'react-redux'

import * as actionType from '../../actions'
import GridRecord from '../../components/grid/gridRecord'

class GridContent extends Component {

    renderGridRecord = () =>{
        return this.props.gridInfo.map((data, index) => {
            return <GridRecord key={index} userInfo={data} />
        })
    }

    addUserInfo = () => {
        let data = {'name':'Sonu', 'orderDate':'', 'unit':0, 'inStock':'true'}
        this.props.addInfo(data);
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex--cont--def user-actions--container">
                    <div className="user-actions--child user-actions--child--a">
                        User({this.props.gridInfo.length})
                    </div>
                    <div className="user-actions--child user-actions--child--b">
                        <FaPlus size={22} onClick={()=> this.addUserInfo()} />
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
                <div className="grid--rows--container">
                    {this.renderGridRecord()}
                </div>
            </React.Fragment>      
        )
    }
}

const mapStateToProps = state => {
    return {
      gridInfo:state.grid.gridInfo
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addInfo:(info) => dispatch(actionType.addUserInfo(info))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridContent)