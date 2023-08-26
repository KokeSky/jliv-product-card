import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductImageProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ( { img, className, style } : ProductImageProps ) => {
    const { product } = useContext(ProductContext)
    
    const imgToShow = (img) ? img : (product.img) ? product.img : noImage;
  
    return (
      // eslint-disable-next-line jsx-a11y/img-redundant-alt
      <img 
         className={ `${ styles.productImg } ${ className } ` } 
         style={ style }
         src={ imgToShow } 
         alt="Product" 
      />  
    )
}