import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    console.log(props);
    const { name, children, favoriteNumber } = props;
    return (
        <div>
            <h1> my name is {name} </h1>
            <br />
            <p>가장 좋아하는 숫자는 {favoriteNumber} 입니다</p>
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
