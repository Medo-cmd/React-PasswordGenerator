import React from 'react'

export default function GeneratePassword(props) {
    return (
        <div className="p-2 m-3">
               <button className="d-block btn btn-primary mt-3"
                onClick={props.onClick}>Generate</button>
        </div>
    )
}
