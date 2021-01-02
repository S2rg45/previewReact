import React,  {useState} from 'react'

const Row = () => {

    const saludo = 'holis'

    const [text, setTexto] = useState('texto desde eñ estado')

    const event = () =>{
        console.log('me diste el click')
        setTexto('change texto from function ')
    }

    return (
        <div>
            <h1>Bienvenido a mi sitio web { saludo }</h1>
            <hr/>
            <h2>Eventos</h2>
            <button onClick = { () => event() } >Click</button>
            <h3>{ text }</h3>
        </div>
    )
}

export default Row
