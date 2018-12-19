import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css"

import './App.css';
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Footer from './components/footer/footer'

import AppRouter from './appRouter'

class App extends Component {

  render() {

    return (
      <div className="flex--cont--def app--container">
        <Header />
        <div className="flex--cont--def app-middle--container">
          <Sidebar />
          <div className="flex--cont--def app-grid--container">
            <AppRouter />
          </div>
        </div>
        <Footer />
      </div>
    )
    
  }
}

export default App;