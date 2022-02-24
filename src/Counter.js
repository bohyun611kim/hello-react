import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        // 초기값 설정
        this.state = {
            number: 0,
        };
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>STATE DEMO </h1>
                <h1>{number}</h1>
                <button
                    // 이벤트
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
