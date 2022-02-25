import React, { Component } from 'react';

class EventPractice extends Component {
    // 상태값 설정
    state = {
        messsage: '',
    };

    // 생성자 가독성을 높여보기
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // 핸들러
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            messsage: e.target.value,
        });
    }

    handleClick() {
        alert(this.state.messsage);
        this.setState({ messsage: '' });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" value={this.state.messsage} onChange={this.handleChange} />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;
