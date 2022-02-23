import React from 'react';

const MyComponent = (props) => {
    console.log(props);
    const { name, children } = props;
    return (
        <div>
            my name is {name} <br />
            nickname is {children}
        </div>
    );
};

// 기본값 설정
MyComponent.defaultProps = {
    name: '기본이름',
};

export default MyComponent;
