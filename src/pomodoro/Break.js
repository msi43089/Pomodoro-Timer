import { minutesToDuration } from "../utils/duration";
import React from "react";
import PropTypes from "prop-types";

function Break ({breakDuration, handleBreakDown, handleBreakUp, session}) {


    return (
      <div className="col">
        <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              disabled={session !== null}
              onClick={handleBreakDown}
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
            >
              <span className="oi oi-minus" />
            </button>
            <button
              disabled={session !== null}
              onClick={handleBreakUp}
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    )
}

Break.propTypes = {
  breakDuration: PropTypes.number.isRequired,
  handleBreakDown: PropTypes.func.isRequired,
  handleBreakUp: PropTypes.func.isRequired,
  session: PropTypes.shape({
    label: PropTypes.string,
    timeRemaining: PropTypes.number
  })
}


export default Break