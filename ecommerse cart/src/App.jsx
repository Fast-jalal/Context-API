import Item from './components/Item'
import './App.css'
import Cart from './components/Cart'

function App() {

  return (
    <div className='App'>
      <Item name="Macbook Pro" price={100000} />
      <Item name="USB" price={4000} />
      <Item name="Iphone" price={102000} />
      <Item name="Metro E8s Pro" price={340000} />

      <Cart />
    </div>
  )
}

export default App
