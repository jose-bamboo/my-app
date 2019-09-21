import React from "react"

function Medicine(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <p>Desc: {props.desc}</p>
        </div>
    )
}

export default Medicine