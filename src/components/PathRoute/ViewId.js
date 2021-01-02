import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const ViewId = () => {
    
    const {id} = useParams()
    const [town , setTown] = useState([]) 
    
    useEffect(() => {
        const getInformation = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const users = await data.json()
            setTown(users)
        }
         getInformation()
    }, [id])


    return (
        <div className="container">
            <h3>{town.name}</h3>
            <p>{town.team_bonus}</p>
        </div>
    )
}

export default ViewId
