import React, { ReactNode, FunctionComponent } from "react";
import { NextPage, NextPageContext } from "next";
import classnames from "classnames";
import { useRouter, NextRouter } from "next/router";

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
 * iDummyContext
 * ----------------------------------------------------------------------
 * Interface para contexto, quando o componente é uma página do Next.
 * Interface for context, when the component is a Next page.
 * 
 * @since 0.0.1
 */
interface iDummyContext extends NextPageContext {
}

/**
 * DummyFunctional
 * ----------------------------------------------------------------------
 * Exemplo de componente funcional, contempla funcionais e paginas.
 * Functional component example, contemplate functions and pages.
 * 
 * @param props 
 *     Props a serem passadas ao componente
 *     Props to be passed to the component 
 * @constructor 
 * @since 0.0.1
 */
// export const DummyFunctional: FunctionComponent<iDummyFunctional> = (
export const DummyFunctional: NextPage<iDummyFunctional> = (
  props: iDummyFunctional
) => {
  // Opcional, mas permite acessar router do Next
  // Optional, allows you access to NextJS's router
  const router:NextRouter = useRouter();

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

/**
 * Usado quando a renderização depende de dados pré-carregados.
 *
 * Quando a falta de algum dado bloqueia a renderização da página, este
 * método é usado para carregá-los.
 *
 * IMPORTANTE:
 * - Este método desabilita a otimização estática do Next, fazendo com que a
 * página que a utiliza seja renderizada do lado do servidor sempre
 * - Este método é exclusivo do Next!
 *
 * Used when rendering depends on pre-loaded data.
 *
 * When you need preloaded data that might block the component from rendering,
 * use this method to pre-load the data from an API or somewhere else.
 *
 * IMPORTANT:
 * - This method disables Next's static optimization, turning it into a
 * server-side only page
 * - This method is exclusive from Next!
 *
 * @param appContext
 *     Objeto contendo informações do contexto atual do componente a serem
 *     passados para props
 *     Object containing the current context of the component to be passed
 *     to props
 */
DummyFunctional.getInitialProps = async (appContext: iDummyContext
  ): Promise<any> => {
  return {
    ...appContext
  };
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
