import React, { Component } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import shoe from '../img/shoe.JPG';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { connect } from 'react-redux';

export class Product extends Component {

    state={
        id:"",
        title:"",
        price:"",
        discount_price:"",
        category:"",
        slug:"",
        description:"",
        image:"",
        
        
    }
    componentDidUpdate(prevProps){
        if (prevProps !== this.props){
            this.setState(this.props.item)
        }
    }   
    render() {
        return (
            
            <div className="product">
                <div className="product_header">
                    <div className="product_item">
                    <div className="product_slide_back"><FaArrowLeft /></div>
                        <div className="product_item-img">
                        
                            <img src={this.state.image} alt="img"/>
                            
                        </div>
                        <div  className="product_slide_continue"><FaArrowRight /></div>
                        
                    </div>
                    <div className="product_details">
                        <div className="product_discription">
                            <div className="product_discription_header">
                                {this.state.description}
                            </div>
                            <div className="product_discription_prices">
                                Discount:{this.state.discount_price}
                                Price:{this.state.price}
                            </div>
                            <div className="product_discription_buynow">
                                <input className="product_discription_buynow-btn" type="submit" value="Buy Now" />
                            </div>
                            <div className="product_discription_cart">
            
                                <input className="product_discription_buynow-btn" type="submit" value="Add to cart" />
                                <AiOutlineShoppingCart className="product_right_cart" />
                            </div>
                        </div>
                        </div>
                </div>
                <div className="product_footer">
                
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    item:state.itemReducer.item
})
export default connect( mapStateToProps )(Product);
