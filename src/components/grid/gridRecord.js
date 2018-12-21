import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionType from '../../actions'
import DatePicker from "react-datepicker"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class GridRecord extends Component {

  render() {

    return (

      <div className="flex--cont--def grid--row--container" >
        <div className="grid--row--child--container">
          <Input type="select" name="name_a">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </div>
        <div className="grid--row--child--container">
          <DatePicker className="grid--calender--field" />
        </div>
        <div className="grid--row--child--container">
          <Input type="text" name="text1" placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container">
          <input type="checkbox" />
        </div>
        <div className="grid--row--child--container">
          <Input
            type="text"
            name="text2"
            placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container action--container">
          <div>
            {true ?
              <button>Save</button>
              :
              <span><button>Edit</button><button>Delete</button></span>
            }
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  let newState = {}

  if (ownProps.id) {

    newState = {

      record: state.grid.gridInfo.filter((record, index) => record.id == ownProps.id),
      products: state.grid.products
    }
  }

  return newState
}

const mapDispatchToProps = dispatch => {
  return {
    // addInfo: (info) => dispatch(actionType.addUserInfo(info)),
    // editInfo: (info) => dispatch(actionType.editUserInfo(info)),
    // deleteInfo: (info) => dispatch(actionType.deleteUserInfo(info)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridRecord)