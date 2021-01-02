import React, {useState} from 'react'

const Forms = () => {

    const [fruta, setFruta] = useState('')
    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    const saveData = (e) => {
        e.preventDefault()

        if(!fruta.trim()){
            console.log("esta vacio el input fruta")
            return
        }
        
        if(!description.trim()){
            console.log("esta vacio el input description")
            return
        }

        console.log("proceso de datos" + fruta + description)
        
        setList([
            ...list,
            {fruta: fruta, description: description}
        ])

        e.target.reset()
        setFruta('')
        setDescription('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit= { saveData }>
                <input 
                    type="text"
                    placeholder="Ingrese frutas"
                    className="form-control mb-2"
                    onChange= { e => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    onChange= { e => setDescription(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <label style= {{color: "blue", font: "bold"}}>Fruta</label>
                            {
                                list.map((item, index) => (
                                <h4 key={index}>{item.fruta}</h4>
                                ))
                            }
                        </div>
                        <div className="col-sm">
                            <label style= {{color: "blue", font: "bold"}}>Descripcion</label>
                            {
                                list.map((item, index) => (
                                <h4 key={index}>{item.description}</h4>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Forms
