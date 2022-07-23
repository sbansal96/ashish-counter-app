import React, { Component } from 'react'
import InputFields from './inputFields'
import Button from "../button";
export default class FormIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: "First Name",
            lname: "Last Name",
            middleName: "Middle Name",
            address: "Address"
        }

        this.onInputTextChange = this.onInputTextChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    onInputTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    handleFormSubmit() {
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <InputFields name="fname" id="fname" onChange={this.onInputTextChange} value={this.state.fname} /><br />
                <InputFields name="lname" id="lname" onChange={this.onInputTextChange} value={this.state.lname} /><br />
                <InputFields name="middleName" id="middleName" onChange={this.onInputTextChange} value={this.state.middleName} /><br />
                <InputFields name="address" id="address" onChange={this.onInputTextChange} value={this.state.address} /><br />
                <Button name="Submit" onClickHandler={this.handleFormSubmit} />
            </div>
        )
    }
}
