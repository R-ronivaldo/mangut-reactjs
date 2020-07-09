import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/profileContext';

const Catalogs = () => {
    const { catalogs } = useContext(ProfileContext);

    const data = catalogs.map(catalog => (
            <div key={catalog.id}>Nome: {catalog.name} - Description: {catalog.description}</div>
    ));

    return (
        <div className="Catalogs">
            {data}
        </div>
    );
}

export default Catalogs;