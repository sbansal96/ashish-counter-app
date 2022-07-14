import React from 'react'

export default function button(props) {
    return (
        <button onClick={props.onClickHandler}>{props.name}</button>
    )
}
