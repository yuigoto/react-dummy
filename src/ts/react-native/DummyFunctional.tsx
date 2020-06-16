import React, { FunctionComponent, ReactNode } from "react";
import { View, ViewStyle } from "react-native";

/**
 * iOwnProps
 * ----------------------------------------------------------------------
 * Exemplo de interface para props do componente.
 * Component props interface example.
 * 
 * @since 0.0.1
 */
interface iOwnProps {
  children?: ReactNode,
  style?: ViewStyle
}

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de componente funcional.
 * Functional component example.
 * 
 * @param props 
 *     Props a serem passadas ao componente
 *     Props to be passed to the component 
 * @constructor 
 * @since 0.0.1
 */
export const DummyFunctional: FunctionComponent<iOwnProps> = (
  props: iOwnProps
) => {
  const {
    children,
    style
  } = props;
  
  return (
    <View style={style}>
      {children}
    </View>
  );
};

// DEFAULT PROPS
// ----------------------------------------------------------------------

// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyFunctional.defaultProps = {
  children: null, 
  style: {
    backgroundColor: "#efefef",
    padding: 16
  }
};
