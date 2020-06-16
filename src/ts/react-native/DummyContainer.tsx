import { connect } from "react-redux";
import { Dispatch } from "redux";
import { DummyFunctional } from "./DummyFunctional";

// INTERFACES
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
interface iOwnProps {}

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

// REDUX
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

// ----------------------------------------------------------------------

/**
 * DummyComponent
 * ----------------------------------------------------------------------
 * Componente a ser exportado.
 * 
 * Component to be exported.
 * 
 * @since 0.0.1
 */
const DummyComponent = connect<iStateProps, iDispatchProps, iOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(DummyFunctional);

// ----------------------------------------------------------------------

export {
  DummyComponent
};
