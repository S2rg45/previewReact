import React from 'react'

const Columns = () => {

    const [numero, setNumero] = React.useState(0)

    // const aumentar = () => {
    //     setNumero(numero + 1)
    //     console.log('event')
    // }

    return (
        <div>
            <h1>Contadors</h1>
            <h2>{numero}</h2>
            <button onClick={() => setNumero(numero + 1)} >aumentar</button>
        </div>
    )
}

export default Columns
