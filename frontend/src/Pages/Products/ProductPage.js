import React from 'react'
import { connect } from "react-redux"
import './ProductPage.css'
import ProductCard from './Card/ProductCard'

function mapStateToProps(state){
  return{
    records: state.productState.records
  }
}

class ProductPage extends React.Component {
  render() {
    const cards = this.props.records.map((record,index)=> (<ProductCard key={index}/>))

    return (
      <div className="product-page">
        <div className="product-page__header">
        <h2>Meus Produtos</h2>
        <div className="product-page__body">
         {cards}
        </div>
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ProductPage)