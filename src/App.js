import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="flex--cont--def app--container">

        <div className="flex--cont--def app-header--cont">
          <div className="app-header--child app--header--child--a">
            COunt
          </div>
          <div className="app-header--child app--header--child--b">
            Add
          </div>
          <div className="app-header--child app--header--child--c">
            filter icon
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
            Name
          </div>
          <div className="grid--columns--container--child--def grid--columns--container--child--a">
            Order Date
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
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
        <div className="flex--cont--def grid--row--container">
          <div className="grid--row--child--container">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="grid--row--child--container">
            <input type="date" name="bday" />
          </div>
          <div className="grid--row--child--container">
            1
          </div>
          <div className="grid--row--child--container">
            <input
              name="isGoing"
              type="checkbox"
            />
          </div>
          <div className="grid--row--child--container">
            yes
          </div>
          <div className="grid--row--child--container action--container">
            edit-delete
          </div>
        </div>
      </div>
    );
  }
}

export default App;
