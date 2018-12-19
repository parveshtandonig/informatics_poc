import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserAction from './components/UserAction'


import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

class App extends Component {

  render() {
    return (
      <div className="flex--cont--def app--container">
        <Header />
        <div className="flex--cont--def app-middle--container">
          <Sidebar />
          <div className="flex--cont--def app-grid--container">
            <UserAction />
            <div className="flex--cont--def grid--columns--container">

              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                Name <IoMdArrowDropdown />
              </div>
              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                Order Date <IoMdArrowDropup />
              </div>
              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                Unit
              </div>
              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                discount
              </div>
              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                in stock
              </div>
              <div className="grid--columns--container--child--def grid--columns--container--child--a">
                edit-delete
              </div>

            </div>
            <div className="grid--rows--container">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10].map((value, index) => (

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

                ))
              }
            </div>
          </div>
        </div>

        <div className="app--footer--container">
          Footer
        </div>
      </div>
    );
  }
}

export default App;