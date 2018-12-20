import React, { Component } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaPlus, FaMinus } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

import {connect} from 'react-redux'

import * as actionType from '../../actions'
import GridRecord from '../../components/grid/gridRecord'

class GridContent extends Component {
    
    constructor(props){
        super(props)
        let {location} = props;
        let post = location.state ? location.state : null;
        
        this.state = {
            userInfoSchema:{
                name:'', 
                orderDate:'', 
                unit:0, 
                inStock:true
            },
            showAddUserUI:false
        }
    }
    renderGridRecord = () =>{
        return this.props.gridInfo.map((data, index) => <GridRecord key={index} userInfo={data.name} />)
    }

    addUserUI = (info) => this.setState({showAddUserUI:info})
    
    addUserInfo = () => {
        let data = {...this.state.userInfoSchema}
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
                        <FaPlus 
                            size={22} 
                            style={{display: this.state.showAddUserUI ? 'none' : 'block' }}
                            onClick={()=> this.addUserUI(true)} />
                        <FaMinus 
                            size={22} 
                            style={{display: this.state.showAddUserUI ? 'block' : 'none' }}
                            onClick={()=> this.addUserUI(false)} />

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
                <div style={{display: this.state.showAddUserUI ? 'block' : 'none'}} className="grid-add-row-container">
                    <GridRecord 
                    userInfo={this.state.userInfoSchema} 
                    onClickHandler={() => this.addUserInfo()}
                    onNameChangeHandler={(evt) => console.log('c')}
                    newRecord="true" />
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