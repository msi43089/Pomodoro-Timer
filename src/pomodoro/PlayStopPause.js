import React from "react";
import classNames from "../utils/class-names";
import PropTypes from "prop-types";

function PlayStopPause ({handleStop, playPause, isTimerRunning, session}) {


    return (
      <div className="row">
        <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            onClick={handleStop}
            disabled={session === null}
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
    )
}

PlayStopPause.propTypes = {
  handleStop: PropTypes.func.isRequired,
  playPause: PropTypes.func.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  session: PropTypes.shape({
    label: PropTypes.string,
    timeRemaining: PropTypes.number
  })
}


export default PlayStopPause