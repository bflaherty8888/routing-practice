import React from 'react';
import { useParams } from 'react-router-dom';

const Echo = (props) => {
    const { message, color, background } = useParams();

    return (
        <h1 style={{color: color, backgroundColor: background}}>
            {
                isNaN(message) ? 
                `The word is: ${message}` :
                `The number is: ${message}`
            }
        </h1>
    );
}

export default Echo;