import React from 'react'

function Books(props) {
    return (
        <div className="each-book">
            <img className="images" src={props.product.img} />
            <p>{props.product.author}</p>
            <p className="words">{props.product.title}</p>
        </div>
    )
}
export default Books