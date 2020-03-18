import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Item from './components/Item'
import Market from './components/Market'

@observer
class App extends Component {
  render() {
    
    return <div><Market key='market' store={this.props.store}/></div>
      
  }
}

export default App;
