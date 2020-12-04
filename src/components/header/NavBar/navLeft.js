import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class NavLeft extends Component {

    _toHome = () =>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="navbar_left">
                <div className="navbar_brand">
                    <input onClick={this._toHome.bind(this)} type="submit" value="ECommerce" className="navbar_brand-head" />
                </div>
            </div>
        )
    }
}

export default withRouter(NavLeft);
