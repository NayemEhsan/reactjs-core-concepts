import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
       <Counter></Counter>
    </div>
  );
}

function Counter(){
  return (
    <div>
      <h1>Count :</h1>
    </div>
  )
}

// ...............................................
// const products = [
//   {name : 'laptop',price : 1500000},
//   {name : 'phone',price : 100000},
//   {name : 'watch',price : 15000},
//   {name : 'sunglass',price : 3000},
//   {name : 'shoes',price : 4000},
//   {name : 'dress',price : 7000}
// ]
// ..............................................
//....its included by returned div...uses
// */
// {
//   products.map(product => <Product name ={product.name} price ={product.price}>
    
//   </Product>)
// }
// <Product name = "laptop" price = "40000"></Product>
// <Product name = "phone" price = "70000"></Product>
// <Product name = "watch" price = "3000"></Product>*/

// function Product(props){
//   return (
//     <div className='product'>
//       <h3>Name : {props.name}</h3>
//       <p>Price : {props.price}</p>
//     </div>
//   )
// }

export default App;
 