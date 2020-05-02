/**
 * PROJECT : FileName
 * ----------------------------------------------------------------------
 * Example of a way to declare Redux Actions.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Import types
import { Test } from "./DummyTypes";

/**
 * Actions handler.
 * @type {Object}
 */
const Actions = {};

/**
 * Test action.
 *
 * @param {*} value
 * @returns {Object}
 */
Actions.testAction = (value) => {
  return {
    value: value,
    // Type is a mandatory field for all actions
    type: Test.TEST_ACTION
  }
};

/**
 * The same test action, but using literal object return syntax.
 *
 * @param {*} value
 * @returns {Object}
 */
Action.testActionLiteral = (value) => ({
  value: value,
  type: Test.TEST_ACTION
});

// ----------------------------------------------------------------------
export default Actions;
