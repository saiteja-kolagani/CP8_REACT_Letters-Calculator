// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeTextInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="content-text-container">
            <h1 className="content-heading">Calculate the Letters you enter</h1>
            <label htmlFor="text" className="content-label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="text"
              className="content-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeTextInput}
            />
            <div className="content-text-letters-count">
              <p className="letters-count">No.of letters: {count}</p>
            </div>
          </div>
          <div className="content-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="content-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
