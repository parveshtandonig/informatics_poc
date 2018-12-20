import React from 'react'
import DatePicker from "react-datepicker"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const GridRecord = (props) => {
  return (
      <div className="flex--cont--def grid--row--container">
      
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
            onChange={(evt)=>props.onNameChangeHandler(evt)}
            defaultValue={props.userInfo.name} 
            placeholder="with a placeholder" />
        </div>
        <div className="grid--row--child--container action--container">
          <div>
            {props.newRecord ? <button onClick={()=>props.onClickHandler()}>Save</button> : 'edit-delete'}
          </div>
        </div>

      </div>
    )
}
export default GridRecord