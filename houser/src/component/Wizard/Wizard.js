import React,  { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../../App.css';

import axios from 'axios'; 

//TODO, import Link, Connect? 

export default class Wizard extends Component {
    constructor() {
        super(); 
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.complete = this.complete.bind(this); 
    }
    nameUpdate(val) {
        this.setState({ name: val })
    }
    addressUpdate(val) {
        this.setState({ address: val })
    }
    cityUpdate(val) {
        this.setState({ city: val })
    }
    stateUpdate(val) {
        this.setState({ state: val })
    }
    zipcodeUpdate(val) {
        this.setState({ zipcode: val })
    }
    complete() {
        const { name, address, city, state, zipcode } = this.state; 
        var newHouse = {
            name, 
            address, 
            city, 
            state, 
            zipcode
        }
        axios.post('/api/houses', newHouse).then(response => {
            //Don't need to set state because Dashboard will do in comp did mount? 
            //Navigate back to DB when res comes through (TODO)
            console.log('--- Posting house res ---', response)
        }).catch(error => {
            console.log('--- Error posting house ---', error)
        })
    }
    render() {
        const { name, address, city, state, zipcode } = this.state; 
        return (
            <div className="Wizard">Add New Listing
                <Link to='/' className='links'>Cancel</Link>
                <input value={name} placeholder="Name" onChange={(e)=> this.nameUpdate(e.target.value)}></input>
                <input value={name} placeholder="Address" onChange={(e)=> this.addressUpdate(e.target.value)}></input>
                <input value={name} placeholder="City" onChange={(e)=> this.cityUpdate(e.target.value)}></input>
                <input value={name} placeholder="State" onChange={(e)=> this.stateUpdate(e.target.value)}></input>
                <input value={name} placeholder="Zip" onChange={(e)=> this.zipcodeUpdate(e.target.value)}></input>
                <button onClick={this.complete}>Complete</button>
            </div>
        )
    }
}
