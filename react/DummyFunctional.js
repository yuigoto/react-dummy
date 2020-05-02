/**
 * PROJECT : Component
 * ----------------------------------------------------------------------
 * Dummy component, kinda sets a lot of stuff for reference, so feel free to
 * copy/delete edit whatever. :)
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

/**
 * Functional component.
 *
 * @param {Node} children
 *    The component's children
 * @param {*} className
 *    String, object, something that includes the component's class
 * @param {function} onClick
 *    Callback function for the test button
 * @returns {*}
 * @constructor
 */
const Dummy = ({children, className, onClick}) => {
  let cls = classnames(
    "default-class",
    className
  );

  return (
    <div className={cls}>
      {children}

      <button onClick={() => { if (onClick) onClick; }}>
        Clickity Click!
      </button>
    </div>
  );
};

// Prop validation
// ----------------------------------------------------------------------

// Set default props
Dummy.defaultProps = {
  className: ""
};

// Validation
Dummy.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

// ----------------------------------------------------------------------
export default Dummy;
