import React, { useState } from 'react'

const ProductDelete = () => {

    const [products, setProducts] = useState([
        {id: 1, name: "Laptop", price: "56000"},
        {id: 2, name: "Mobile", price: "16000"},
        {id: 3, name: "Speaker", price: "400"},
        {id: 4, name: "Monitor", price: "6000"},
    ])

    const removeProduct = (id) => {
        const updateProducts = products.filter(
            (product) => product.id !==id
        )
        setProducts(updateProducts)
    }
  return (
    <div>
        <ul>
            {products.map((product) =>(
                <li key={product.id}>{product.name}, ₹{product.price}
                <button onClick={()=>removeProduct(product.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductDelete