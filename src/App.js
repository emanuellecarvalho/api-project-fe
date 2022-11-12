import { useEffect, useState } from 'react';
import './App.css';
import ProductsTable from './components/productsTable';

const url = "http://localhost:3000/products";

function App() {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []); 


  return (
    <div className="App">
      <h1>Lista de Produtos:</h1>
        <ProductsTable
          products={products}
        />
{/*       <ul>
        {products && products.map((product) => (
          <>
          <li>{product.name}</li>
          <li>R$ {product.price}</li>
          </>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
