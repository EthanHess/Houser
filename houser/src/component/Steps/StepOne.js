import React,  { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../../App.css';

import axios from 'axios'; 

export default class StepOne extends Component {
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
                
            </div>
        )
    }
}