import React,  { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../../App.css';

//TODO, import Link, Connect? 

export default class Wizard extends Component {
    render() {
        return (
            <div className="Wizard">Add New Listing
                <Link to='/' className='links'>Cancel</Link>
            </div>
        )
    }
}