import React from 'react'
import './Card.css'


export default function Card(props) {
  return (
    <div className="card">
        <div className="imgBox">
            <img src={props.image} alt="" />
        </div>
            <div className="details">
                <div className="contento">
                    <h1>{props.name}</h1>
                    <h3>{props.build}</h3>
                    <p>{props.about}</p>
                    <a href={props.url} target='_blank' className="button"></a>
                </div>
            </div>
        
    </div>
  )
}
