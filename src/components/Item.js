import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import { observer, inject } from 'mobx-react'

@inject('agoramarket' , 'itemInput')
@observer
class Item extends Component {

    buyItem = () => {
        this.props.store.buyItem(this.props.itemInput.name)
    }

    changePrice = () => {
        let newPrice = prompt('edit price')
        this.props.store.changePrice(this.props.itemInput.name, newPrice)
    }

    render() {
        let item = this.props.itemInput
        return <li><span onClick={this.changePrice}>{item.quantity} {item.name}{item.quantity > 1 ? 's' : ''} for {item.price}$</span> <button onClick={this.buyItem}>buy</button></li>
            
    }
}

export default Item