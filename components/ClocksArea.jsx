import Clock from './Clock'
import clockSet from '../data/clockSet'

export default () => (
  <div className="clock-area">
    {clockSet.map(clock => <Clock clock={clock} key={clock.id} /> )}
    <style jsx>{`

      .clock-area {
        display: flex;

      }

    `}</style>
  </div>
)