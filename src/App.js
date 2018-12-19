import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css"

import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserAction from './components/UserAction'
import GridHeader from './components/GridHeader'
import GridContent from './components/GridContent'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
      <div className="flex--cont--def app--container">
        <Header />
        <div className="flex--cont--def app-middle--container">
          <Sidebar />
          <div className="flex--cont--def app-grid--container">
            <UserAction />
            <GridHeader />
            <div className="grid--rows--container">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10].map((value, index) => (

                  <GridContent />

                ))
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;