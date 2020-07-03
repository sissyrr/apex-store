import React from 'react'
import './ProductCard.css'


const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="imagem">
        <img src={props.product.image} alt={props.alt} />
      </div>
      <div className="titulo">
        <h3>{props.product.name}</h3>
      </div>
      <div className="preço">
        <h4>{props.product.price}</h4>
      </div>
      <div className="descriçao">
        <p>{props.product.description}</p>
      </div>
      <div>
        <button className="button-produto" onClick={()=> props.onAddItem(props.product)}>Adicionar ao carrinho</button>
      </div>
    </div>

  )
}

export default ProductCard