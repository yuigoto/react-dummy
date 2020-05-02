/**
 * PROJECT : FileName
 * ----------------------------------------------------------------------
 * Example of a way to combine reducers for Redux.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import { combineReducers } from "redux";

// Import reducers
import DummyReducer from "./DummyReducer";

// Combine reducer in a single reducer entity
const Reducers = combineReducers({
  test: DummyReducer
});

// ----------------------------------------------------------------------
export default Reducers;
