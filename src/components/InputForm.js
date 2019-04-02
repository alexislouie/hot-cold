import React, { Component } from 'react'

export default class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: null
        }

        this.submitGuess = this.submitGuess.bind(this)
        this.setGuess = this.setGuess.bind(this)
    }

    submitGuess(event) {
        event.preventDefault();
        const {guess} = this.state;
        const { checkGuess } = this.props;
        checkGuess(guess);
    }

    setGuess(guess) {
        this.setState({
            guess
        })
    }

    render() {
        return (
            <div className="inputFrom">
                <form>
                    <input type="text" value={this.state.text}
                        onChange={e => this.setGuess(e.target.value)}></input>
                    <button onClick={this.submitGuess}>Guess</button>
                </form>
            </div>
        );
    }
}

// export default InputForm