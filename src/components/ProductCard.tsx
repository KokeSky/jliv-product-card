import React, { Provider } from 'react';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ( { children, product, className, style, onChange, value, initialValues } : ProductCardProps ) => {
  
  const { counter,  maxCount, isMaxCountReached, increaseBy, reset } = useProduct( { product, onChange, value, initialValues } );

  return (
    <Provider value={{
        counter,
        increaseBy,
        maxCount,
        product
    }} >
      <div 
        className={ `${ styles.productCard } ${ className }` }
        style={ style }
      >
        { 
        children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }       
      </div>
    </Provider>
  )
}






