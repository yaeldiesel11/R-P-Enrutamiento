import React from 'react';
import { useParams } from 'react-router-dom';

const Message = () => {
    const { var: wordNumber } = useParams();
    const isNumber = !isNaN(wordNumber);

    return isNumber ? (
        <h1>El número es {wordNumber}</h1>
    ) : (
        <h1>La palabra es {wordNumber}</h1>
    );
}

export default Message;