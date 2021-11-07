import React from 'react'

export default function Sort(props) {
    return (
        <div className="p-2 m-3 text-start">
            <h2>Enter Array of numbers</h2>
            <p>enter only numbers and the numbers should be separated with ' , '</p>


            <input type="text" name="sortInput" value={props.inputValue} 
                onChange={props.onChange} />

            <button type="button" className="d-block btn btn-primary mt-3"
            onClick={props.onClick} >Sort</button>

        </div>
    )
}
