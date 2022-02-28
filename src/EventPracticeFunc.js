import React, { useState } from 'react';

const EventPracticeFunc = () => {
    const [form, setForm] = useState({
        username: '',
        messsage: '',
    });

    const { username, messsage } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form, // 폼값을 복사
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    const onClick = () => {
        alert(username + ' : ' + messsage);
        setForm({
            username,
            messsage,
        });
    };

    return (
        <div>
            <h1>이벤트 연습</h1> <hr />
            <input type="text" name="username" placeholder="이름" value={username} onChange={onChange}></input>
            <br />
            <input type="text" name="messsage" placeholder="아무거나" value={messsage} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPracticeFunc;
