// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncrementMangos = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncrementBananas = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="count">
            Bob ate <span className="count-colour">{mangoCount}</span> Mangoes
            <span className="count-colour"> {bananaCount} </span> bananas
          </h1>
          <div className="flex-content">
            <div className="flex-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="Mangoes"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncrementMangos}
              >
                Eat Mango
              </button>
            </div>
            <div className="flex-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="mango"
                alt="Bananas"
              />
              <button
                type="button"
                className="button"
                onClick={this.onIncrementBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
