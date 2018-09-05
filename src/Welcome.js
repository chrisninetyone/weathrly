import React from 'react';
import Search from './Search';


const Welcome = (props) => {
    return (
        <div>
            <div>Welcome to Weathrly!</div>
            <Search handleSubmit={props.handleSubmit}/>
        </div>
    )
}

export default Welcome;