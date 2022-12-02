import React from "react";
export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card--image"/>
            <div className="card--status">
                <img src="./star.png" className="star"/>
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.reviewCount}. </span>
                <span>{props.country}</span>

            </div>
            <div className="card-detail">
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}