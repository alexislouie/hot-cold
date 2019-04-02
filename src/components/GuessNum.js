import React from 'react'

export default function GuessNum(props) {
    const {guessCount} = props;
    return (
        <div className="guessNum">
            Guess #{guessCount}
        </div>
    );
};
