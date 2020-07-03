import React from 'react'
import './CartTable.css'


const CartTable = (props) => {
  const items = props.selectedItems.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    )
  })
  return (
    <div className="cart-table">
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>

  )
}

export default CartTable