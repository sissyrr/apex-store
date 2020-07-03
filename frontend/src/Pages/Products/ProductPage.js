import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import './ProductPage.css'
import ProductCard from './Card/ProductCard'
import * as actions from './products.actions'
import * as cartActions from '../Cart/cart.actions'

function mapStateToProps(state) {
  return {
    records: state.productState.records,
    totalSelectedItems: state.cartState.selectedItems.length
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => {
      dispatch(actions.loadRecords());
    },

    addToCart: (product) => {
      dispatch(cartActions.addItem(product))
    }
  }
}

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const cards = this.props.records.map((record, index) => (<ProductCard key={index} product={record} onAddItem={this.props.addToCart}/>))

    return (
      <div className="product-page">
        <div className="product-page__header">
          <h1>Meus Produtos</h1>
          <p>Itens no carrinho: <Link to="/cart">{this.props.totalSelectedItems}</Link></p>
          <div className="product-page__body">
            {cards}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);