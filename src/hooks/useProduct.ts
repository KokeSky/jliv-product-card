import { useState, useEffect, useRef } from 'react'
import { useProductArgs } from '../interfaces/interfaces';

export const useProduct = ( { product, onChange, value=0, initialValues }: useProductArgs   ) => {
    
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMounted = useRef( false );

    //const isControlled = useRef( !!onChange );

    function increaseBy(value: number) {
      // console.log('isControlled', isControlled.current);

      // if (isControlled.current) {
      //   return onChange!({ product, count: value });
      // }

      let newValue = Math.max( counter + value, 0 );
      if(initialValues?.maxCount) {
        newValue = Math.min( newValue, initialValues.maxCount );        
      }

      setCounter(newValue);
      onChange && onChange({ product, count: newValue });
    }
    
    const reset = () => {
      setCounter(initialValues?.count || value);
    }

    useEffect(() => {
      if( !isMounted.current ) return;
      setCounter(value);    
    }, [value])
    
    useEffect(() => {
      isMounted.current = true;    
    }, [])
    
    return {
        counter, 
        isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset,
    }
}
