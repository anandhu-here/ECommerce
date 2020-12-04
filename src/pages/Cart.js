import React, { Component } from 'react'
import shoe from '../img/shoe.JPG';
import { connect } from 'react-redux';
import store from '../store';
import { GetCartItems } from '../actions/Cart';
export class Cart extends Component {
    render() {
        console.log(this.props.items)
        const items = [...this.props.items]
        const cartList = items.map(item=>{
            console.log(item.title)
            return(
                <div className="cart_grid">
                <div className="cart_grid_item">
                        <div className="cart_grid_item-img"><img src={item.image} alt="img:"/></div>
                        <div className="cart_grid_item-detail">{item.title}</div>
                </div>
                <div className="cart_grid_total_item">
                    cdcd
                </div>
                </div>
            
            )
        })
        return (     
             
           <div className="cart-container">
                <div className="cart-container_heading">
                    Cart vfdvfdvfd
                </div>
                {cartList}
                
           </div>
        )
    }
}

const mapStateToProps = state =>({
    items:state.cartReducer.items
})

export default connect(mapStateToProps, GetCartItems)(Cart);
