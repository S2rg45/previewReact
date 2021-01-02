import React, { useState } from 'react'
import FormWork from './FormWork';
import shortid from 'shortid'

const ListWork = () => {
    
    return (
        <div>
            <h1 className="text-center">Lista de Tareas</h1>
            <ul className="list-group">
                {
                    FormWork.homeworks.map( item => (
                        <li className="list-group-item" key={item.id}>
                            <span className="lead">{item.nameHomework}</span>
                            <button className="btn btn-danger btn-sm float-right mx-2">Eliminar Tarea</button>
                            <button className="btn btn-warning btn-sm float-right">Editar Tarea</button>
                        </li>
                    ))
                }
            </ul>
        </div>
 
    )
}

export default ListWork