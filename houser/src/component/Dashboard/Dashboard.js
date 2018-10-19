import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import House from '../House/House.js'; 

//TODO, import Link, Connect? 

export default class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">Dashboard
                <Link to='/wizard' className='links'>Add New Property</Link>
                <House/>
            </div>
        )
    }
}

