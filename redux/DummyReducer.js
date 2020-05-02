/**
 * PROJECT : FileName
 * ----------------------------------------------------------------------
 * Example of a way to declare a Reducer for Redux.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import { Test } from "./DummyTypes";

/**
 * Reducer function, executes actions according to the action type declared
 * when dispatching it.
 *
 * @param {*} state
 * @param {*} action
 * @returns {*}
 * @constructor
 */
export function DummyReducer(state = {}, action) {
  switch (action.type) {
    // Test action
    case Test.TEST_ACTION:
      return Object.assign({}, state, {
        value: action.value
      });

    // By default, returns unmodified state
    default:
      return state;
  }
}
