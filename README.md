# JLIV-Product-Card

Este es un paquete de pruebas de despliegue NPM


### Jorge Luis Ibarra Valdez


## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from 'jliv-product-card';
```

```
<ProductCard 
    product={ product } 
    initialValues={{
        count: 4,
        maxCount: 10,   
    }}
>
    {
        ( { count, maxCount, isMaxCountReached, increaseBy, reset } ) => (
              <>
                <ProductImage /> 
                <ProductTitle  /> 
                <ProductButtons />                
              </>
        )
    }      
</ProductCard> 

```