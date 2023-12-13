import React, { Component } from 'react';

class Switcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isOn: false,
        };
    }
    handleToggle = ()=>{
        this.setState((prevState)=>({
            isOn: !prevState.isOn,
        }));
    };
    render()
    {
        return(
            <div>
            <button onMouseOver={this.handleToggle} onMouseOut={this.handleToggle}>
                {this.state.isOn ? 'true' : 'false'}
            </button>
            </div>
        );
    }
}
export default Switcher;