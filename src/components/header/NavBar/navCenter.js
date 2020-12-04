import React, { Component } from 'react'
import {IoIosSearch} from 'react-icons/io'
export class NavCenter extends Component {
    render() {
        return (
            <div className="navbar_center">
                <form className="navbar_center_search_form">
                    <IoIosSearch className="navbar_center_search_icon" />
                    <input className="navbar_center_search_input" type="text" placeholder="Search"></input>

                </form>
            </div>
        )
    }
}

export default NavCenter
