import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <>
            <MyComponent name="react hello!" favoriteNumber={123}>
                자식 리액트
            </MyComponent>
        </>
    );
}
export default App;
