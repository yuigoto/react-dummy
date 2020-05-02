/**
 * PROJECT : Component
 * ----------------------------------------------------------------------
 * Dummy component, kinda sets a lot of stuff for reference, so feel free to
 * copy/delete edit whatever. :)
 *
 * I kinda wanted some offline docs quickly for lifecycle methods, that's
 * why it's so full of text here. :P
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Component class
class Dummy extends Component {
  // Properties
  // --------------------------------------------------------------------

  /**
   * Component mounted status.
   *
   * @type {boolean}
   * @private
   */
  _mounted = false;

  // Constructor
  // -------------------------------------------------------------------

  /**
   * Constructor.
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {};

    // Method binding
    this.componentStyle = this.componentStyle.bind(this);
    this.componentIsMounted = this.componentIsMounted.bind(this);
  }

  // Methods
  // --------------------------------------------------------------------

  /**
   * Fetches the component's style from props, feeds it to an array so we 
   * can use it for spreading.
   *
   * @returns {Object|Array}
   */
  componentStyle() {
    // Set default style
    let styles = this.props.style || { backgroundColor: "#fff" };
    return (typeof(styles) === "array") ? styles : [styles];
  }

  /**
   * Returns the component's mounted status.
   *
   * @returns {boolean}
   */
  componentIsMounted() {
    return this._mounted;
  }

  // Lifecycle Methods
  // --------------------------------------------------------------------

  /**
   * Called before mounting occurs.
   *
   * Used to be called `componentWillMount`.
   *
   * @deprecated
   *    Since React 16.3-alpha, recommendation is to use the
   *    `componentDidMount` method instead
   */
  UNSAFE_componentWillMount() {
  }

  /**
   * Called after mounting occurs.
   */
  componentDidMount() {
    this._mounted = true;
  }

  /**
   * Called before the component is unmounted and destroyed.
   */
  componentWillUnmount() {
    this._mounted = false;
  }

  /**
   * Invoked before a mounted component receives new props, used to know if it
   * should update in response to changes in received props.
   *
   * Used to be called `componentWillReceiveProps`.
   *
   * @param {Object} nextProps
   *    Newly received props
   * @deprecated
   *    Since React 16.3-alpha, recommendation is to use the new
   *    `getDerivedStatedFromProps` static method instead, but only as
   *    a last resort
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
  }

  /**
   * Used to let React know if the component's output is affected by the
   * current change in state or props.
   *
   * By returning `false` it prevents the component from re-rendering. It
   * also blocks the `componentWillUpdate` and `componentDidUpdate` methods
   * by returning `false`.
   *
   * @param {Object} nextProps
   *    Newly received props
   * @param {Object} nextState
   *    Updated component state
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * Invoked before rendering, when new props or updates in the state are being
   * received.
   *
   * Used for preparation before the update occurs, doesn't trigger if the
   * `shouldComponentUpdate` method returns `false`.
   *
   * @param {Object} nextProps
   *    Newly received props
   * @param {Object} nextState
   *    Updated component state
   * @deprecated
   *    Since React 16.3-alpha, recommendation is to use the
   *    `componentDidUpdate` method instead or, if reading from the DOM,
   *    to use the `getSnapshotBeforeUpdate` method
   */
  UNSAFE_componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Invoked after the update occurs, useful to operate on the DOM and manage
   * network requests.
   *
   * Doesn't trigger if `shouldComponentUpdate` returns `false`.
   *
   * @param {Object} prevProps
   *    Previously used props
   * @param {Object} prevState
   *    Previous component state
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Transforms the component into a React error boundary: a component that
   * catches errors anywhere in their child component tree.
   *
   * Use it to log errors and display a fallback component tree.
   *
   * DO NOT use error boundaries to control flow.
   *
   * DOES NOT catch an error within itself.
   *
   * @param {Object} error
   *    Object containing the error thrown
   * @param {Object} info
   *    Object containing error information
   */
  componentDidCatch(error, info) {
  }

  /**
   * Invoked after a component is instantiated or when receiving new props.
   * Should return an object to update the state or `null`, if no change should
   * be made when new props are received.
   *
   * It's triggered when a parent component causes this component to re-render,
   * comparing values is advised.
   *
   * Calling `this.setState()` WILL NOT trigger this method.
   *
   * THIS METHOD IS RARELY USED, recommendation is to use simpler solutions.
   *
   * @param {Object} props
   *    Updated props
   * @param {Object} state
   *    Updated state
   * @returns {*}
   */
  static getDerivedStateFromProps(props, state) {
    return null;
  }

  /**
   * Invoked before the most recently rendered output is commited (to the DOM,
   * for example). It enables the component to catch some info from the DOM
   * before it is potentially changed.
   *
   * Any value returned by this method will be passed as a parameter to
   * `componentDidUpdate`.
   *
   * Returns a snapshot value or `null`.
   *
   * @param {Object} prevProps
   *    Previously used props
   * @param {Object} prevState
   *    Previous component state
   * @returns {*}
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  /**
   * Renders the component.
   */
  render() {
    const { props, state } = this;

    // If the component is navigation-aware, comment if not needed
    const { navigate } = props.navigation;

    return (
      <View style={this.componentStyle()}>
        <Text>DummyComponentContent</Text>

        <Button onPress={() => navigate("ViewName")}>
          <Text>Go Somewhere</Text>
        </Button>
      </View>
    );
  }
}

// Prop validation
// ----------------------------------------------------------------------

// Set default props
Dummy.defaultProps = {
  testProp: false
};

// Validation
Dummy.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.any)
  ]),
  testProp: PropTypes.bool
};

// Redux
// ----------------------------------------------------------------------

/**
 * Maps Redux's state to component props.
 *
 * @param {Object} state
 * @returns {Object}
 */
const mapStateToProps = (state) => ({
});

/**
 * Maps Redux's dispatch method to props.
 *
 * @param {function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = (dispatch) => ({
});

// Connects to react-redux
Dummy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);

// ----------------------------------------------------------------------
export default Dummy;
