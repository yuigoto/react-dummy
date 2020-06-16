import { connect } from "react-redux";
import { Dispatch } from "redux";

import { DummyFunctional } from "./DummyFunctional";
import { ReactNode } from "react";

/**
 * DummyContainer
 * ----------------------------------------------------------------------
 * Exemplo de componente do tipo container.
 *
 * É um componente "state-aware" que envelopa um componente comum, stateless,
 * passando suas props à ele e adicionando super poderes.
 * 
 * Container component example.
 * 
 * It's a state-aware container that wraps a common functional component, adding 
 * superpowers to it.
 * 
 * @since 0.0.1
 */

// PROP TYPES
// ----------------------------------------------------------------------

/**
 * iOwnProps
 * ----------------------------------------------------------------------
 * Oferece assinatura de tipo para as props do componente.
 *
 * Offers type signatures for the component props.
 * 
 * @since 0.0.1
 */
interface iOwnProps {
  id?: string,
  className?: string|string[],
  children: ReactNode
}

/**
 * iStateProps
 * ----------------------------------------------------------------------
 * Oferece assinatura de tipo para props mapeadas da store do Redux.
 *
 * Offers type signature for props mapped from Redux's store.
 * 
 * @since 0.0.1
 */
interface iStateProps {}

/**
 * iDispatchProps
 * ----------------------------------------------------------------------
 * Oferece assinatura de tipo para props mapeadas para ações do Redux.
 *
 * Offers type signature for props mapped to Redux's actions.
 * 
 * @since 0.0.1
 */
interface iDispatchProps {}

// ----------------------------------------------------------------------

/**
 * Mapeia chaves da store para props do componente.
 *
 * Maps keys from the store to component props.
 *
 * @param state
 */
const mapStateToProps = (state: iStateProps) => ({
});

/**
 * Mapeia ações da store para props do componente.
 *
 * Maps actions from the store to component props.
 *
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

/**
 * DummyContainer
 * ----------------------------------------------------------------------
 * Componente a ser exportado.
 * 
 * Component to be exported.
 * 
 * @since 0.0.1
 */
const DummyContainer = connect<iStateProps, iDispatchProps, iOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------

export { DummyContainer };
