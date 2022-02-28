import React, { Component } from 'react';

class EventPractice extends Component {
    // 상태값 설정
    state = {
        username: '',
        messsage: '',
    };

    // 핸들러
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.messsage);
        this.setState({
            username: '',
            messsage: '',
        });
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1> <hr />
                <input type="text" name="username" placeholder="이름" value={this.state.username} onChange={this.handleChange}></input>
                <br />
                <input type="text" name="messsage" placeholder="아무거나" value={this.state.messsage} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
