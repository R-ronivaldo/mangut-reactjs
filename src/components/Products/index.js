import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/profileContext';

const Products = (props) => {
    const { products } = useContext(ProfileContext);

    const productList = products.filter(function(item) {
        return item.catalog === props.catalog
    });
    
    return (
        <div className="Products">
            {
                productList.map(product => (
                    <div key={product._id}>
        
                    <   div>
                           Nome do Produto: {product.name} - Valor do Produto: {product.price}
                        </div>
                    
                    </div>
                ))
            }
        </div>
    );
}

export default Products;