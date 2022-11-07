import React from 'react'

const Basket = (props) => {
    
    // renderizamos en el div y decimos q si cartItems es igual a 0 entonces && muestre un msj 
    const {cartItems , onAdd , onRemove} = props;

    //usamos reduce sobre cartItems y luego usamos los 2 parametros
    const itemsPrice = cartItems.reduce( (a,c) => a + c.price * c.qty , 0);

    // aca multiplicamos el 2.14 al itemsPrice
    const taxPrice = itemsPrice * 0.14;
    
    //costo del envio decimos que si itemsprice es mayor a 2000 q sea 0 pesos sino se paga 50
    const shippingPrice = itemsPrice > 2000 ? 0 : 50

    //precio total que va a pagar es la suma de las 3 variables
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

  
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div> The Cart is Empty </div>} 
            </div>
            {cartItems.map( (item) =>(
                <div key={item.id} className='row'>
                    <div className='col-2' >{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                <div  className='col-2 text-right'>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                </div>
            ))}

            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className='row'>
                        <div className='col-2' >Items Price</div>
                        <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                    </div>

                    <div className='row'>
                        <div className='col-2' >Tax Price</div>
                        <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                    </div>

                    <div className='row'>
                        <div className='col-2' >Shipping Price</div>
                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>

                    <div className='row'>
                        <div className='col-2'>  <strong>TOTAL</strong>  </div>
                        <div className='col-1 text-right'> <strong> ${totalPrice.toFixed(2)} </strong></div>
                    </div>
                    <hr />
                    <div className='row'>
                        <button onClick={ () => alert ('Implement Checkout')}> Checkout</button>
                    </div>
                </>
            )}
        </aside>
  )
}

export default Basket;