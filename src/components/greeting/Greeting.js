import React from 'react'

function Greeting(props) {
    return (
        <div>
            <h1>Saludando  {props.name} </h1>
            <h2>Edad : {props.edad}</h2>
        </div>
    )
}


export default Greeting

