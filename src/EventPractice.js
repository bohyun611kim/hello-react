import React, { Component } from 'react';

class EventPractice extends Component {
    // 상태값 설정
    state = {
        messsage: '',
    };
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="이메일을 넣으세요"
                    value={this.state.messsage}
                    onChange={(e) => {
                        this.setState({ messsage: e.target.value });
                    }}
                />
                <h1>{this.messsage}</h1>
            </div>
        );
    }
}

export default EventPractice;
