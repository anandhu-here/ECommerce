import React, { Component } from 'react'
import '../../../styles/main.css';
import NavCenter from './navCenter';
import NavLeft from './navLeft';
import NavRight from './navRight';
export class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLeft />
                <NavCenter />
                <NavRight />
            </div>
        )
    }
}

export default NavBar
