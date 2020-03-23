import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Item from './Item'

@inject('agoramarket', 'itemInput')
@observer
class Market extends Component {

    inputHandler = (e) => {
        this.props.itemInput.handleInput(e.target.name, e.target.value)
    }
    
    addItem = () => {
        this.props.agoramarket.addItem(this.name, this.price, this.quantity)
    }
    

    render() {
        let store = this.props.agoramarket
        return (
        <div key='marketdiv'>
            <input placeholder='Enter Item Name' onChange = {this.inputHandler} name = "name"/>
            <input placeholder="Enter item's price" onChange = {this.inputHandler} name = "price"/>
            <input placeholder='Enter Number of items' onChange = {this.inputHandler} name = "quantity"/>
            <button onClick = {this.addItem}>Add</button>
            <ul key='list'>
                {store.items.map(i => <Item key={i.id} item={i}/>)}
            </ul>
        </div>
        )
    }
}

export default Market