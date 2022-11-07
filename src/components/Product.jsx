import React from 'react'

const Product = (props) => {

    //pasamos los product como props para usarlos en las cards de cada producto
    const {product , onAdd} = props;

  return (

    // en este div creamos la card de c/ producto que luego renderiza el .map en el main
    <div>
        <img className='small' src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button  onClick={() => onAdd(product)}> Add To Cart </button>
        </div>
    </div>
  )
}

export default Product