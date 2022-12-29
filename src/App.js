import HomeScreen from "./HomeScreen";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ProductScreen from "./ProductScreen";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Link to="/">Amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path ='/product/:slug' element={<ProductScreen/>}/>
          <Route path='/' element={<HomeScreen/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
