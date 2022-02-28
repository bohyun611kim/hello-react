import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    };

    handlechange = (e) => {
        console.log(e.target.value);
        this.setState({
            password: e.target.value,
        });
    };

    handelButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
    };

    render() {
        return (
            <div>
                <h1>welcome!</h1>
                <input type="password" value={password} onChange={this.handlechange} className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}></input>
                <button onClick={this.handelButtonClick}>검증하기 </button>
            </div>
        );
    }
}

export default ValidationSample;
