import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;