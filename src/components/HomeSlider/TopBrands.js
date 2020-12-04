import React, { Component } from 'react'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { connect } from 'react-redux';
import { GetProducts, GetItem } from '../../actions/products'
import { withRouter } from 'react-router-dom';
import { GetCartItems } from '../../actions/Cart';
export class TopBrands extends Component {
    constructor(props){
        super(props)
        this.state={
            itemIndex:0,
            AnimateClass:"brand-slider_items",
            ItemCount:3,
            width:window.innerWidth,
            height:window.innerHeight,
            offset:3
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    }
    
    componentDidMount(){
        this.props.GetProducts()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (this.state.width < 596){
            this.setState({
                ItemCount:2,
                offset:2
            })
        }
        else{
            this.setState({
                ItemCount:3
            })
        }
        
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions)
    }


    __handleslideoutLeft(e, l){ 
        
        if(this.state.itemIndex+this.state.offset < l){
            e.stopPropagation();
            e.preventDefault()
            this.setState({
                AnimateClass:"brand-slider_items brand-slider_slideout"
            });
            setTimeout(()=>{
                this.setState({
                    itemIndex:this.state.itemIndex+this.state.ItemCount,
                    AnimateClass:"brand-slider_items brand-slider_slidein"
                })
            }, 150)
        }
        
        
    }
    __handleslideoutRight = (e)=>{
        if(this.state.itemIndex >0){
            e.preventDefault()
            e.stopPropagation();
            this.setState({
                AnimateClass:"brand-slider_items brand-slider_slideoutRight"
            });
            setTimeout(()=>{
                this.setState({
                    itemIndex:this.state.itemIndex-this.state.ItemCount,
                    AnimateClass:"brand-slider_items brand-slider_slideinRight"
                })
            },)
        }
        
        
    }
    _toProduct = (_id, title) =>{
        this.props.GetItem(_id)
        this.props.history.push(`/product`)
    }
    _toCart = (item) =>{
        this.props.GetCartItems(item)
        this.props.history.push(`/cart`)
    }
    render() {
        const list_data = [...this.props.products];
        const product_list = list_data.map(item=>{
            
            return (
                <div key={item.id}  className="brand-slider_items_item">
                    <div onClick={this._toCart.bind(this, item)} className="brand-slider_items_item_cart"><AiOutlineShoppingCart /></div>
                    <div onClick={this._toProduct.bind(this, item.id, item.title)} className="brand-slider_items_item_img">
                        <img  alt="cdc" src={item.image}  />
                    </div>
                    <div className="brand-slider_items_item_bottom">
                        
                        <div className="brand-slider_items_item_bottom_title">{item.title}</div>
                        <div className="brand-slider_items_item_bottom_price">Best Offer {item.price}</div>
                        <div className="brand-slider_items_item_bottom_discription">{item.description}</div>
                    </div>
                </div>
            )
        })
        let final_list = []
        let index = this.state.itemIndex;
        const l = product_list.length;  

        this.state.ItemCount === 3?final_list=[product_list[index],product_list[index+1], product_list[index+2]]:final_list=[product_list[index],product_list[index+1]]
        return (
            <div className="brand-slider">
                <div className="brand-slider_title">Best Offers !</div>
                <div className="brand-slider_underline"></div>
                <div onClick={this.__handleslideoutRight.bind(this)} className="brand-slider_container">
                    <div className="brand-slider_back"><FaArrowLeft /></div>
                    <div className={this.state.AnimateClass}>{final_list}</div>
                    
                    <div onClick={(e)=>this.__handleslideoutLeft(e, l)} className="brand-slider_continue"><FaArrowRight /></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        products:state.proReducer.bestOffers
    }
)


export default connect(mapStateToProps, {GetProducts,GetItem, GetCartItems } )(withRouter(TopBrands));
