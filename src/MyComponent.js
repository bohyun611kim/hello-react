import React from 'react';
import PropTypes from 'prop-types';

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
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
