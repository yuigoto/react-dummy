import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

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
const DummyFunctional = ({children}) => {
  return (
    <View>
      <Text>Hello</Text>
      
      {children}
    </View>
  );
};

// PROP TYPES
// ----------------------------------------------------------------------

// Define o valor padrão para props que necessitem
// Defines default values for props that require
DummyFunctional.defaultProps = {
};


// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyFunctional.propTypes = {
  children: PropTypes.node
};

// ----------------------------------------------------------------------

export { DummyFunctional };
