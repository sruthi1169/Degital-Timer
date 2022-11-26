import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    isStart: true,
    count: 25,
  }

  onChangeButtonText = () => {
    this.setState(prev => ({isStart: !prev.isStart}))
  }

  onResetEveryThing = () => {
    this.setState({isStart: true})
  }

  onDecreaseCount = () => {
    this.setState(prev => ({count: prev.count - 1}))
  }

  onIncreaseCount = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {isStart, count} = this.state
    return (
      <div className="app-container">
        <h1 className="app-container-heading">Digital Timer</h1>
        <div className="main-timer-container">
          <div className="timer-container">
            <div className="running-time">
              <p className="timer">25:00</p>
              <p className="timer-text">{isStart ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="main-set-timer-container">
            <div className="buttons-container">
              <button
                type="button"
                className="button"
                onClick={this.onChangeButtonText}
              >
                <img
                  alt="play icon"
                  className="play img"
                  src={
                    isStart
                      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                  }
                />
                {isStart ? 'Start' : 'Pause'}
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onResetEveryThing}
              >
                <img
                  alt="reset icon"
                  className="reset img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                Reset
              </button>
            </div>
            <p className="timer-text2">set Timer limit</p>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onDecreaseCount}
              >
                -
              </button>
              <button type="button" className="button special">
                {count}
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onIncreaseCount}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
