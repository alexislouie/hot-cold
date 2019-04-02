import React, { Component } from 'react';
import Hint from './Hint';
import PrevGuesses from './PrevGuesses';
import InputForm from './InputForm';
import GuessNum from './GuessNum';

let answer;

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hint: 'Make a guess!',
            hasWon: false,
            guessCount: 0,
            guessHist: []
        };
        this.increaseGuessCount = this.increaseGuessCount.bind(this)
        this.checkGuess = this.checkGuess.bind(this)
        this.generateNumber = this.generateNumber.bind(this)
        this.updateGuessHist = this.updateGuessHist.bind(this)
    }

    componentDidMount() {
        answer = this.generateNumber();
        console.log(answer)
    }

    increaseGuessCount() {
        this.setState(prevState => ({ guessCount : prevState.guessCount + 1 }));
    }

    updateGuessHist(guess) {
        let { guessHist } = this.state;
        guessHist.push(guess)
        this.setState({
            guessHist
        })
        this.increaseGuessCount();
    }

    checkGuess(guess) {
        const {guessHist} = this.state;
        const difference = Math.abs(answer - guess);
        if (guessHist.includes(guess)) {
            alert('You already guessed that number');
        } else {
            this.updateGuessHist(guess);
            if (difference === 0) {
                this.setState({ hint: 'You won!', hasWon: true });
            } else if (difference > 15 ) {
                this.setState({ hint: 'cold' });
            } else {
                this.setState({ hint: 'hot' });
            }
        }
    }

    generateNumber() {
        return Math.floor(Math.random() * (100));
    }

    render() {
        const { hint, hasWon, guessCount, guessHist } = this.state;
        return (
            <div className="board">
                <Hint hint={hint}/>
                <InputForm checkGuess={this.checkGuess} hasWon={hasWon} />
                <GuessNum guessCount={guessCount}/>
                <PrevGuesses guessHist={guessHist}/>
            </div>
        )
    }
}

// export default Board
