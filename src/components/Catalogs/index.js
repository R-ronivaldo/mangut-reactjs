import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/profileContext';

import Products from '../Products';

const Catalogs = () => {
    const { catalogs } = useContext(ProfileContext);

    return (
        <div className="Catalogs">
            {
                catalogs.map(catalog => (
                    <div key={catalog._id}>
                    
                    <   div>
                            Catalogo: {catalog.name} - Description: {catalog.description}
                        </div>
                    
                        <Products catalog={catalog._id}/>
                    
                    </div>
                ))
            }
        </div>
    );
}

export default Catalogs;