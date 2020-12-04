import React, { Component } from 'react';
import '../../styles/main.css';
import pic from '../../img/pic.JPG';
export class Header extends Component {
    render() {
        return (
            <div className="header" >
                <div className="header_img"><img src={pic} alt="image"/></div>
                <div className="header_text_box">
                    <div className="header_text_box_heading">This is an ecommerce site</div>
                    
                    <input 
                        className="header_input"
                        type="submit"
                        value="Get started"
                    />

                </div>
            </div>
        )
    }
}

export default Header
