import React from 'react';
import './CartPage.css';
import { connect } from "react-redux";
import CartTable from './CartTable';



function mapStateToProps(state) {
  return {
    selectedItems: state.cartState.selectedItems
  }
}

class CartPage extends React.Component {


  render(){

    return(
      <div className="cart-page">
      <div className="cart-page__header">
        <h1>Carrinho</h1>
        <div className="cart-page__body">
          <CartTable selectedItems={this.props.selectedItems} />
        </div>
      </div>
    </div>
    )
  }

}

export default connect(mapStateToProps)(CartPage);