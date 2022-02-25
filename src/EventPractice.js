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
                        console.log(e.target.value);
                        this.setState({ messsage: e.target.value });
                    }}
                />
                <button
                    onClick={() => {
                        alert(this.state.messsage);
                        this.setState({
                            messsage: '',
                        });
                    }}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice;
