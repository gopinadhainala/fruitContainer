import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  clickMangoButton = () => {
    this.setState(previous => ({mangoCount: previous.mangoCount + 1}))
  }

  clickBananaButton = () => {
    this.setState(previous => ({bananaCount: previous.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="highlight-count">{mangoCount}</span>{' '}
            mangoes
            <span className="highlight-count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruit-card">
            <div className="each-container mango-container">
              <img
                className="images-styling"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.clickMangoButton}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="each-container banana-container">
              <img
                className="images-styling"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.clickBananaButton}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
