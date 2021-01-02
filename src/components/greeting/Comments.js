import React from 'react'
import { Images } from './Images'

export const Comments = (props) => {
    return (
        <div className="media">
            <Images urlImages={props.urlImages} />
            <div className="media-body">
                <h5 className="mt-0">{props.name}</h5>
                {props.text}
            </div>
        </div>
    )
}
