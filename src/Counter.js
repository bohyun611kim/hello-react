import React, { Component } from 'react';

class Counter extends Component {
    // constructor에서 꺼내기
    state = {
        number: 0,
        fixedNumber: 0,
    };

    render() {
        //console.log(this.state);
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>상태가 변하는 값 : {number}</h1>
                <h2>바뀌지않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 }, () => {
                            console.log(this.state);
                            console.log('호출...');
                        });
                    }}
                >
                    <span>+1</span>
                </button>
            </div>
        );
    }
}

export default Counter;
