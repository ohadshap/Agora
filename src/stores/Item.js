import { observable, action } from 'mobx'

export class Item {
    @observable name
    @observable price
    @observable quantity
    @action handleInput = (name, value) => {
        this[name] = value
    } 
}