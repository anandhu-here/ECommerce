import React, { Component, Fragment } from 'react'
import Header from '../components/header/header'
import NavBar from '../components/header/NavBar/navbar'
import TopBrands from '../components/HomeSlider/TopBrands'
import '../styles/main.css';
import { connect } from 'react-redux';

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <TopBrands />
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.authReducer
})
export default connect(mapStateToProps)(Home);
