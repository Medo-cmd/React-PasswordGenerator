import React from 'react'

export default function SortResult(props) {
    return (
        <div className="p-2 m-3">
            <h2>Sorted Array :</h2>
            {props.SortedArray.length?  <p className="bg-secondary px-2 py-4 m-3 fs-4 text-center text-light">{props.SortedArray.join(' ,')}</p> 
            : null }
        </div>
    )
}