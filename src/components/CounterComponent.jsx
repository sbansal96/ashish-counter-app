import React, { Component } from 'react'
import Button from "./button";
export default class CounterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement(e) {
        console.log("handleIncrement");
        const { counter } = this.state;
        let newCounter = counter + 1;
        this.setState({
            counter: newCounter
        })
    }

    handleDecrement(e) {
        console.log("handleDecrement");
        const { counter } = this.state;
        let newCounter = counter - 1;
        this.setState({
            counter: newCounter
        })
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <Button name="Increment" onClickHandler={this.handleIncrement} />
                <Button name="Decrement" onClickHandler={this.handleDecrement} />
            </div>
        )
    }
}