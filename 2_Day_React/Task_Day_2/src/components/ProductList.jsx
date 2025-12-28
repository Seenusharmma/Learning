import React from 'react'

const ProductList = () => {

    const products = [
        {id: 1, name: "Laptop", price: "50000"},
        {id: 2, name: "Mobile", price: "10000"},
        {id: 3, name: "Speakers", price: "5000"},
    ]
  return (
    <div>
        <ul>
            {products.map((product)=> (
                <li key={product.id}>{product.name},₹{product.price}
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default ProductList