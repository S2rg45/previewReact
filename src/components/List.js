import React, {useState} from 'react'

const List = () => {
    
    const Carro = [
        {id: 1, accesorio:"llantas"},
        {id: 2, accesorio:"Luz"},
        {id: 3, accesorio:"farol"}
    ]
    const [list, setList] = useState(Carro)

    const agregarElemento = () => {
        console.log('click')
        setList([
            ...Carro,
            {id:4, accesorio:"radio"}
        ])
    }
    // const pais = ['chile', 'argentina']
    // const ciudades = ['bogota', 'cali']

    // const merge = [...pais, ...ciudades]
    // console.log('merge', merge)

    return (
        <div>
            <br/>
            <h1>Listasa </h1>
            {
            list.map((item, index) => (
                <h4 key={index}>partes carros: {item.accesorio}</h4>
                ))
            }
            <button onClick={() => agregarElemento()} >Agregar</button>
        </div>
    )
}

export default List