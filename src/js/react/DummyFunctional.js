import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de componente funcional.
 * Functional component example.
 *
 * @param {*|Object} props 
 *     Objeto contendo as props para uso no componente 
 * @returns {*}
 * @constructor
 */
const DummyFunctional = ({id, className, children}) => {
  let _attr = {
    className: classnames(className)
  };

  if (id) _attr.id = id;

  return (
    <div {..._attr}>
      {children}
    </div>
  );
};

// PROP TYPES
// ----------------------------------------------------------------------

// Define o valor padrão para props que necessitem
// Defines default values for props that require
DummyFunctional.defaultProps = {
  id: null,
  className: null
};


// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyFunctional.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.node
};

// ----------------------------------------------------------------------

export { DummyFunctional };
