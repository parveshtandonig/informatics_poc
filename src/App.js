import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css"

import './App.css';
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import UserAction from './components/user_action/userAction'
import GridHeader from './components/grid/gridHeader'
import Footer from './components/footer/footer'
import GridContent from './components/grid/gridContent'

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
            <GridContent />
          </div>
        </div>
        <Footer />
      </div>
    )
    
  }
}

export default App;