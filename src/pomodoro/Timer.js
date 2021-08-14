import React from "react"
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import PropTypes from "prop-types";

function Timer ({breakDuration, focusDuration, session ,isTimerRunning}) {
   

  const durationSeconds = session?.label === "Focusing" ? focusDuration * 60 : breakDuration * 60;
  const durationBar = 100 * (1 -session?.timeRemaining / durationSeconds);
  const durationRemaining = session?.label === "On Break" ? minutesToDuration(breakDuration) : minutesToDuration(focusDuration);


    return (
      session &&
     (
        <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for {durationRemaining} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h2>PAUSED</h2>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow= {durationBar} 
                style={{ width:  `${durationBar}%` }} 
              />
            </div>
          </div>
        </div>
      </div>
    )
    )
}

Timer.propTypes = {
  breakDuration: PropTypes.number.isRequired,
  focusDuration: PropTypes.number.isRequired,
  session: PropTypes.shape({
    label: PropTypes.string,
    timeRemaining: PropTypes.number
  }),
  isTimerRunning: PropTypes.bool.isRequired
}


export default Timer