import React, { Component } from 'react';

import User from '../../components/User';
import Catalogs from '../../components/Catalogs';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <User />
                <Catalogs />
            </div>
        );
    }
}