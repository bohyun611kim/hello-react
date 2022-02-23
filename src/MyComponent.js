import React from 'react';

const MyComponent = (props) => {
    console.log(props);
    const { name, children, age, sex } = props;
    return (
        <div>
            my name is {name} <br />
            nickname is {children} <br />
            단비 : {age} 이고 {sex}
        </div>
    );
};

// 기본값 설정
MyComponent.defaultProps = {
    name: '기본이름',
    age: 12,
    sex: 'man',
};

export default MyComponent;
