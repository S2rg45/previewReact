import React, { useState } from 'react'
import shortid from 'shortid'

const FormWork = () => {

    const [homework, setHomeWork] = useState('') 
    const [homeworks, setHomeWorks] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addWork = (e) =>{
        e.preventDefault()
        if(!homework.trim()){
            setError('Por favor escriba algo Señor!!!!!!!!!!!!!!!!')
            return
        }
        setHomeWorks([
            ...homeworks,
            {id: shortid.generate(), nameHomework: homework}
        ])
        setHomeWork('')
        setError(null)
    }

    const editTask = (e) => {
        e.preventDefault()
        if(!homework.trim()){
            setError('Por favor escriba algo Señor!!!!!!!!!!!!!!!!')
            return
        }

        const editItem = homeworks.map(item => item.id === id ? {id, nameHomework: homework} : item)

        setHomeWorks(editItem)
        setEditMode(false)
        setHomeWork('')
        setId('')
        setError(null)
    }

    const deleteHomework = id => {
        const deleteItem = homeworks.filter(item => item.id !== id)
        setHomeWorks(deleteItem)
    }

    const edit = item => {
        setEditMode(true)
        setHomeWork(item.nameHomework)
        setId(item.id)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">CRUD</h1>
            <hr/>
                <div className="row">
                    <div className="col-8">
                        <h1 className="text-center">Lista de Tareas</h1>
                            <ul className="list-group">
                                {

                                    homeworks.length === 0 ? (
                                        <li className="list-group-item">No hay tareas para mostar</li>
                                    ) : (
                                        homeworks.map(item => (
                                            <li className="list-group-item" key={item.id}>
                                                <span className="lead">{item.nameHomework}</span>
                                                <button 
                                                className="btn btn-danger btn-sm float-right mx-2"
                                                onClick={() => deleteHomework(item.id)}
                                                >
                                                    Eliminar Tarea
                                                </button>
                                                <button 
                                                className="btn btn-warning btn-sm float-right"
                                                onClick={() => edit(item)}
                                                >
                                                    Editar Tarea
                                                </button>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-4">
                            <h1 className="text-center">
                                { 
                                    editMode ? 'Editar Tarea' : 'Agregar Tarea'
                                }
                            </h1>
                            <form onSubmit={ editMode ? editTask : addWork}>
                                    {
                                        error ? <span className="text-danger">{error}</span> : null
                                    }
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="ingrese la tarea"
                                    onChange={e => setHomeWork(e.target.value)}
                                    value={homework}
                                />
                                {
                                    editMode ? (
                                        <button className="btn btn-warning btn-block" type="submit" >Editar tarea </button>
                                    ) : (
                                        <button className="btn btn-dark btn-block" type="submit" >Agregar tarea </button>
                                    )
                                }
                            </form>
                        </div>
                </div>
        </div> 
    )
}

export default FormWork