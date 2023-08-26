
import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductButtonsProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductButtons = ( { className, style } : ProductButtonsProps  ) => {

    // TODO: maxCount
    const { counter, increaseBy, maxCount } = useContext(ProductContext);
  
    const isMaxReached = useCallback(
      () => !!maxCount && counter=== maxCount,        
      [counter, maxCount],
    );
    // TODO: isMacReached = useCallBack [ coint, maxCount]
    // TRUE si el count=== maxCount
    // FALSE si no lo es

    return (
      <div 
        className={ `${ styles.buttonsContainer } ${ className } ` }
        style={ style }
      >
        <button 
          className={ styles.buttonMinus }
          onClick={ () => increaseBy( -1 )  }
          > - </button>
        <div className={ styles.countLabel }> { counter } </div>
        <button 
          className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled } `  }
          onClick={ () => increaseBy( 1 ) }
          > + </button> 
      </div>     
    )
  }