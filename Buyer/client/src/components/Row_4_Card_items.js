import React from 'react'
import './Row_4_Card.css'
export default function Row_4_Card_items({ imageurl}) {
    return (
        <div className="card-container"
        style={{
            backgroundImage: `url(${imageurl})`
        }}>
         
        </div>
    )
}
