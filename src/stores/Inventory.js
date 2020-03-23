import { observable, action, computed } from 'mobx'
import { Item } from './Item'


export class Inventory {
    @observable items = []

    @computed get numItems() {
        let counter = 0
        this.items.forEach(i => counter += i.quantity)
    }
    
    @action addItem = (name, price, quantity) => {
        let item = this.items.find(i => i.name === name)
        if(item && item.price === price) {
            item.quantity += quantity
        } else {
            let newItem = new Item(name, price, quantity)
            this.items.push(newItem)
        }
    }

    @action buyItem = name => {
        let index = this.items.findIndex(i => i.name === name)
        this.items[index].quantity -= 1
        if(this.items[index].quantity == 0) {
            this.items.splice(index, 1)
            console.log(`item deleted`)
            console.log(this.items)
        }
    }

    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}
