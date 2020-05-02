/**
 * PROJECT : Component
 * ----------------------------------------------------------------------
 * Example of a container component.
 *
 * It's a redux-aware component that passes actions down to a stateless
 * component (in this example, an action dispatcher as an onClick prop).
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import { connect } from "react-redux";

// Local imports
import DummyFunctional from "./DummyFunctional";

// Redux
// ----------------------------------------------------------------------

/**
 * Maps Redux's state to component props.
 *
 * @param {Object} state
 * @param {Object} ownProps
 * @returns {Object}
 */
const mapStateToProps = (state, ownProps) => ({
  ...state
});

/**
 * Maps Redux's dispatch method to props.
 *
 * @param {function} dispatch
 * @param {Òbject} ownProps
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("Clickity!");
    // dispatch();
  }
});

// Connects to react-redux
const DummyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------
export default DummyContainer;
