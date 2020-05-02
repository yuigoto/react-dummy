/**
 * PROJECT : FileName
 * ----------------------------------------------------------------------
 * Example of a way to declare a Store for Redux.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import { createStore } from "redux";

// Import local modules
import DummyCombiner from "./DummyCombiner";

// Set initial application state
const initialState = {};

/**
 * Application store, the single source of truth for everything.
 *
 * Bow down before your God, application! >:3
 *
 * @type {Store<any>}
 */
const Store = createStore(
  DummyCombiner,
  initialState
);

// ----------------------------------------------------------------------
export default Store;
