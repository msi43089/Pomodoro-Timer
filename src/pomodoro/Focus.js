import { minutesToDuration } from "../utils/duration";
import React from "react";
import PropTypes from "prop-types";

function Focus ({focusDuration, handleFocusDown, handleFocusUp, session}) {


return (
  <div className="col">
      <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              <button
                disabled= {session !== null}
                onClick={handleFocusDown}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              <button
                disabled={session !== null}
                onClick={handleFocusUp}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
            </div>
            </div>
)
}

Focus.propTypes = {
  focusDuration: PropTypes.number.isRequired,
  handleFocusDown: PropTypes.func.isRequired,
  handleFocusUp: PropTypes.func.isRequired,
  session: PropTypes.shape({
    label: PropTypes.string.isRequired,
    timeRemaining: PropTypes.number.isRequired
  })
}


export default Focus