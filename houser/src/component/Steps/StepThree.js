import React,  { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../../App.css';

import axios from 'axios'; 

export default class StepThree extends Component {
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
        return (
            <button onClick={this.complete}>Complete</button>
        )
    }
}