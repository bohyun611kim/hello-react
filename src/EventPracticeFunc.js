import React, { useState } from 'react';

// 함수형 컴퍼넌트 변형
const EventPracticeFunc = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };

    return (
        <div>
            <h1>이벤트 연습</h1> <hr />
            <input type="text" name="username" placeholder="이름" value={username} onChange={onChangeUsername}></input>
            <br />
            <input type="text" name="messsage" placeholder="아무거나" value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPracticeFunc;
