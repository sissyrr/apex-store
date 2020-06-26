import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="imagem">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="titulo">
        <h3>{props.titulo}</h3>
      </div>
      <div className="preço">
        <h4>{props.preço}</h4>
      </div>
      <div className="descriçao">
        <p>{props.descriçao}</p>
      </div>
      <div>
        <button className="button-produto">Adicionar ao carrinho</button>
      </div>
    </div>

  )
}

export default ProductCard