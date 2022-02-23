import React from 'react';

const MyComponent = (props) => {
    console.log(props);
    return (
        <div>
            my name is {props.name} <br />
            nickname is {props.children}
        </div>
    );
};

// 기본값 설정
MyComponent.defaultProps = {
    name: '기본이름',
};

export default MyComponent;
