import React, { Component } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';

export class NavRight extends Component {
    
    _handleLogin = () =>{
        this.props.history.push('/login')
    }
    _handlelogout = () =>{
        this.props.logout()
    }
    render() {
        const { isAuth, user, token } = this.props.auth;
        if(isAuth === true){
            return(
                <div className="navbar_right">
                    <AiOutlineShoppingCart className="navbar_right_cart" />
                    <input onClick={this._handlelogout.bind(this)} type="submit" className="navbar_right_login" value="Logout"/>
                </div>
            )
        }
        else{
            return (
                <div className="navbar_right">
                    <AiOutlineShoppingCart className="navbar_right_cart" onClick={()=>this.props.history.push("/cart")} />
                    <input onClick={this._handleLogin.bind(this)}  className="navbar_right_login" type="submit" value="Login" />
                </div>
            )
        }
        
    }
}
const mapStateToProps = state => ({
    auth:state.authReducer
})
export default connect(mapStateToProps, {logout})(withRouter(NavRight));
