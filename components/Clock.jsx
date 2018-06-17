import React from 'react'

export default class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    setInterval(() => this.setDate(), 1000)
  }

  getSeconds () {
    const degPerSec = 360 / 60
    return this.state.date.getSeconds() * degPerSec
  }

  getMinutes () {
    const degPerMin = 360 / 60
    return this.state.date.getMinutes() * degPerMin
  }

  getHours () {
    const degPerHour = 360 / 12
    return (this.state.date.getUTCHours() + this.props.clock.UTC) * degPerHour
  }

  setDate () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div className="clock">
        <div className="clock__container">
          <svg className="analog-clock" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            
            <g id="face">
              <circle className="circle" cx="100" cy="100" r="100" />
              <path className="hour-marks" d="" />
              <circle className="mid-circle" cx="100" cy="100" r="9" />
            </g>

            <g className="second">
              <text x="120" y="107" className="city-name" transform={`rotate(${this.getSeconds() - 90} 100 100)`} >{this.props.clock.cityName}</text>
              {/* <line className="second-arm" x1="100" y1="100" x2="100" y2="0" transform={`rotate(${this.getSeconds()} 100 100)`} /> */}
            </g>

            <g className="minute">
              <line className="minute-arm" x1="100" y1="100" x2="100" y2="0" transform={`rotate(${this.getMinutes()} 100 100)`} />
            </g>

            <g className="hour">
              <line className="hour-arm" x1="100" y1="100" x2="100" y2="20" transform={`rotate(${this.getHours()} 100 100)`} />
            </g>

          </svg>

        </div>
        <style jsx>{`

      .clock {
        flex: 1;
        margin: 20px;
        height: 200px;
        width: 200px;
        border: 1px solid rgba(0, 0, 0, .2);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0px 2px 6px 0px rgba(0,0,0,.1);
      }

      .clock__container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .circle {
        fill: none;
        stroke: tomato;
        stroke-width: 1;
      }

      .mid-circle {
        fill: tomato;
      }

      .city-name {
        fill: tomato;
        font: bold 16px sans-serif;
      }

      .hour-arm {
        fill: none;
        stroke: tomato;
        stroke-width: 18;
        stroke-miterlimit: 10;
        border-radius: 5px;
      }

      .minute-arm {
        fill: none;
        stroke: tomato;
        stroke-width: 5;
        stroke-miterlimit: 10;
      }

      .second-arm {
        fill: none;
        stroke: tomato;
        stroke-width: 2;
        stroke-miterlimit: 10;
      }

      .hour,
      .minute,
      .second {
        transform-origin: 100px 100px;
        transition: transform 1s ease-in-out;
      }

    `}</style>
      </div>
    )
  }
}