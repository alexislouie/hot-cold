import React from 'react';

export default function Hint(props) {
    return (
        <div className="hint">
            {props.hint}
        </div>
    );
};

Hint.defaultProps = {
    hintText: 'Make your guess!'
};
