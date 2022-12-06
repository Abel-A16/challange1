import React from "react";
export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if (props.item.location === "online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image"/>

            <div className="card--status">
                <img src="./star.png" className="star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) </span>
                <span > .{props.item.location}</span>

            </div>
            <div className="card-detail">
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
            </div>
        </div>
    )
}