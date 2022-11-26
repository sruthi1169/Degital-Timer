import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isStatus: false}

  componentDidMount() {
    this.timerId = setInterval(this.time, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onToggleClock = () => {
    this.setState(prevState => ({isStatus: !prevState.isStatus}))
  }

  onIncrement = () => {
    this.setState(prevState => ({minutes: prevState.minutes + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({minutes: prevState.minutes - 1}))
  }

  onClickRest = () => {
    this.setState({minutes: 25, seconds: 0, isStatus: false})
    clearInterval(this.timerId)
  }

  time = () => {
    const {minutes, seconds, isStatus} = this.state

    const remainSeconds = minutes * 60 - 1 + seconds
    const minutesCal = Math.floor(remainSeconds / 60)
    const secondsCal = Math.floor(remainSeconds % 60)
    const timerCompleted = secondsCal === minutesCal * 60

    if (timerCompleted) {
      this.setState({isStatus: false, seconds: 0})

      clearInterval(this.timerId)
    }
    if (isStatus === true) {
      this.setState({
        minutes: minutesCal,
        seconds: secondsCal,
      })
    }
  }

  render() {
    const {minutes, seconds, isStatus} = this.state
    const playUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const pauseUrl =
      'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const minutesStr = minutes > 9 ? minutes : `0${minutes}`
    const secondsStr = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="container">
          <div className="timer-container">
            <div className="showtime-card">
              <h1 className="time">
                {minutesStr}:{secondsStr}
              </h1>
              <p className="status">{isStatus ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="time-control-container">
            <div className="play-pause-reset-card">
              <div className="play-pause-card">
                <button
                  className="play-pause-btn"
                  type="button"
                  onClick={this.onToggleClock}
                >
                  {isStatus ? (
                    <img
                      src={pauseUrl}
                      className="play-pause-img"
                      alt="pause icon"
                    />
                  ) : (
                    <img
                      src={playUrl}
                      className="play-pause-img"
                      alt="play icon"
                    />
                  )}
                  {isStatus ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="reset-card">
                <button
                  onClick={this.onClickRest}
                  type="button"
                  className="play-pause-btn"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="play-pause-img"
                  />
                </button>
                <p className="play-pause-name">Reset</p>
              </div>
            </div>
            <p className="description">Set Timer limit</p>
            <div className="inc-dec-btn-container">
              <button
                disabled={isStatus}
                onClick={this.onDecrement}
                type="button"
                className="inc-dec-btn"
              >
                -
              </button>
              <p className="time-inc-dec-text">{minutes}</p>
              <button
                disabled={isStatus}
                onClick={this.onIncrement}
                type="button"
                className="inc-dec-btn"
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
