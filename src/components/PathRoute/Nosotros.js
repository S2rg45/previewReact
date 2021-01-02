import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export const Nosotros = () => {

    const [equipo , setEquipo] = useState([]) 
    
    useEffect(() => {
         getInformation()
    }, [])

    const getInformation = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setEquipo(users.civilizations)
    }

    return (
    <div className="container">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nosotros
        </button>
        <h1>Civilizacion</h1>
        <ul>
            {
                equipo.map(item =>(
                    <li key={item.id}>
                        <Link to={`/nosotros/${item.id}`}>
                            {item.name}--{item.expansion}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}

export default Nosotros

