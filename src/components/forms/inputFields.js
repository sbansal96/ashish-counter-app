import React from 'react'

export default function inputFields({ name, id, onChange, value }) {
    return (
        <input type="text" name={name} id={id} onChange={onChange} value={value} />
    )
}
