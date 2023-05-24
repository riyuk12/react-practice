import React from "react";

const Card=(props)=>{

    const {id,name,email}=props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">
                {name}
            </div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon"></i>
    </div>
    )
}

export default Card