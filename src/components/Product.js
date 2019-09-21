import React from "react"

function Product(props){
    return (
        <ul>
            <li>Prod Name: {props.product.name}</li>
            <li>Price: {props.product.price}</li>
            <li>Desc: {props.product.description}</li>
        </ul>
    )
}

export default Product