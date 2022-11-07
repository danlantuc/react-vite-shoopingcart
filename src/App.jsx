
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './data'

function App() {

  //usamos {} para extraer productos desde data.js y se lo pasamos al componente Main xq ahi mostramos los productos
  const {products} = data;

//definimos el estado para manejar los items del carrito y definimos un array para decirle q esta vacio
  const [cartItems, setCartItems] = useState([]);

//funcion para decir si el articulo existe o no en el cart, si el mismo producto esta dentro del cart aumenta el valor en 1 ,
//pero si es otro producto no lo aumenta . qty= quantity  

    const onAdd = (product) => {
    const exist = cartItems.find( x => x.id === product.id );
    if (exist) {
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x ) )
    } else {
      setCartItems([ ...cartItems , {...product , qty : 1}])
    }
  };


  //definimos la funcion para el aside el boton que saca un articulo del cart
  const onRemove = (product) => {
    const exist = cartItems.find( (x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems( cartItems.filter( (x) => x.id !== product.id ));
    }else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x ) )
    }
  }

  return (
    <div className="App">
        <Header countCartItems={cartItems.length}/>
        <div className='row'>
            <Main onAdd={onAdd}  products={products}/>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>
    </div>
  )
}

export default App
