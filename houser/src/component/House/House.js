import React from 'react';
import '../../App.css';

//Pass in props
export default function House(props) {
    return <div>House
        <div className="House">
            <img src=""/> 
            <p>{this.props.name}</p>
            <p>{this.props.address}</p>
            <p>{this.props.city}</p>
            <p>{this.props.state}</p>
            <p>{this.props.zipcode}</p>
            <p></p>
            <p></p>
            <button onClick={this.props.deleteFn(this.props.id)}>Delete</button>
        </div>
    </div>
}