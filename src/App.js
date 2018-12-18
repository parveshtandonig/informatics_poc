// npm install react-datepicker --save
import React, { Component } from 'react';
import './App.css';

import { FaPlus } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

class App extends Component {

  render() {
    return (
      <div className="flex--cont--def app--container">

        <div className="flex--cont--def app-header--cont">
          <div className="app-header--child app--header--child--a">
            User(256)
          </div>
          <div className="app-header--child app--header--child--b">
            <FaPlus size={22} />
          </div>
          <div className="app-header--child app--header--child--c">
            <FiFilter size={22} />
          </div>
          <div className="app-header--child app--header--child--d">
            <input type='text'
              name='search--filter'
              id='search--filter'
              placeholder='Search here' />
          </div>
        </div>
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
        {
          [1, 2, 3, 4, 5].map((value, index) => (

            <div className="flex--cont--def grid--row--container">
              <div className="grid--row--child--container">
                <select className="middle--center">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
              </div>
              <div className="grid--row--child--container">
                <input className="middle--center" type="date" name="name_a" />
              </div>
              <div className="grid--row--child--container">
                <input className="middle--center" type="text" name="name_b" />
              </div>
              <div className="grid--row--child--container">
                <input className="middle--center" name="name_c" type="checkbox" />
              </div>
              <div className="grid--row--child--container">
                <input className="middle--center" name="name_d" type="text" />
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
    );
  }
}

export default App;
