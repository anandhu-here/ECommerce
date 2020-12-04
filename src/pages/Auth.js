import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';


export class Auth extends Component {
    state = {
        AuthOpt:"Login"
    }
    _changeOpt=(opt)=>{
        this.setState({
            AuthOpt:opt
        })
    }
    render(){
        const { isAuth,isloading } = this.props.auth;
        
        if(isAuth){
            return <Redirect to="/" />
        }
        else{
            return(
                <div className="auth_container">
                    <div className="auth_options">
                        <div className="auth_options-login" onClick={this._changeOpt.bind(this,"Login")}>Login</div>
                        <div className="auth_options-login" onClick={this._changeOpt.bind(this,"Register")}>Sign Up</div>
                    </div>
                    { isloading ===true? <div className="loader"></div>:null}
                    { this.state.AuthOpt==="Login"?<Login/>:<Register /> }
                </div>
            )

    }
}
}


const mapstateToProps = state =>({
    auth:state.authReducer
})

export default connect(mapstateToProps)(Auth);