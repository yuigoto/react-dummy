import React, { ReactNode } from "react";
import classnames from "classnames";

/**
 * iDummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de interface para componente.
 * Component interface example.
 * 
 * @since 0.0.1
 */
interface iDummyFunctional {
  id?: string,
  className?: string|string[],
  children?: ReactNode
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
export const DummyFunctional: React.FunctionComponent<iDummyFunctional> = (
  props: iDummyFunctional
) => {
  let _attr:any = {
    className: classnames(props.className)
  };
  if (props.id) _attr.id = props.id;
  
  return (
    <>
      <div {..._attr}>
        {props.children}
      </div>
    </>
  );
};

// DEFAULT PROPS
// ----------------------------------------------------------------------

// Define o tipo de dados para cada prop aceita
// Defines the data type for each accepted prop
DummyFunctional.defaultProps = {
  id: null,
  className: null,
  children: null
};
