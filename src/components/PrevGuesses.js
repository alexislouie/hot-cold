import React from 'react'

function guesses(guessHist) {
    return guessHist.join(', ');
}

export default function PrevGuesses(props) {
    const { guessHist } = props;
    const guessHistText = guesses(guessHist);
    return (
        <div className="prevGuesses">
            { guessHistText }
        </div>
    );
};

PrevGuesses.defaultProps = {
    text: ''
};
