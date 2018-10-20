import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import axios from 'axios'; 

import House from '../House/House.js'; 

//TODO, import Link, Connect? 

export default class Dashboard extends Component {
    constructor() {
        super(); 
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this); 
    }

    componentDidMount() {
        axios.get("/api/houses").then(response => {
            this.setState({ houses: response.data })
        }).catch(error => { 
            console.log('--- Dashboard fetch error ---', error)
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(response => {
            this.setState({ houses: response.data })
        })
    }

    //TODO pass props down to House
    render() {
        return (
            <div className="Dashboard">Dashboard
                <Link to='/wizard' className='links'>Add New Property</Link>
               { this.state.houses.map(house => (
                   <div>
                     <House deleteFn={this.deleteHouse}
                     id={house.id}
                     name={house.name}
                     address={house.address}
                     city={house.city}
                     state={house.state}
                     zipcode={house.zipcode}/>
                   </div>
                ))} 
            </div>
        )
    }
}

        //Props reference
                        {/* <Product /> 
                        <ul>
                        <li>
                        <img src={product.image_url}/>
                        </li>
                        <li>
                        <p>{product.name}</p>
                        </li>
                        <li>
                        <p>{product.price}</p>
                        </li>
                        </ul> */}
                    