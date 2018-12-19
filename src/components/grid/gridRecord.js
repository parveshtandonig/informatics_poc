import React, { Component } from 'react'

import DatePicker from "react-datepicker"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class GridRecord extends Component {

  render() {

    return (
      <div className="flex--cont--def grid--row--container">
      
        <div className="grid--row--child--container">
          <Input type="select" name="name_a" id="exampleSelect">
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
          <Input type="text" name="name_c" id="exampleEmail" placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container">
          <input type="checkbox" />
        </div>
        <div className="grid--row--child--container">
          <Input type="text" name="name_e" id="exampleEmail1" placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container action--container">
          <div>
            edit-delete
          </div>
        </div>

      </div>
    )
  }

}

export default GridRecord