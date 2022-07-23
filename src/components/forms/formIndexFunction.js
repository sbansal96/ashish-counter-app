import React from 'react'
import InputFields from './inputFields'
import Button from "../button";
import { useState } from 'react';


export default function FormIndexFunction() {

    const [fname, setFname] = useState("First Name")
    const [lname, setlname] = useState("Last Name")
    const [middleName, setmiddleName] = useState("Middle Name")
    const [address, setaddress] = useState("Address")

    // (e) => setFname(e.target.value)

    const handleFormSubmit = () => {
        // console.log(fname, lname, middleName, address)
        submit(() => console.log("Submit"))
    }

    const submit = (funct) => {
        console.log(funct)
        funct()
    }

    return (
        <>
            <InputFields name="fname" id="fname" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
            <InputFields name="lname" id="lname" onChange={(e) => setlname(e.target.value)} value={lname} /><br />
            <InputFields name="middleName" id="middleName" onChange={(e) => setmiddleName(e.target.value)} value={middleName} /><br />
            <InputFields name="address" id="address" onChange={(e) => setaddress(e.target.value)} value={address} /><br />
            <Button name="Submit" onClickHandler={handleFormSubmit} />
        </>
    )
}
