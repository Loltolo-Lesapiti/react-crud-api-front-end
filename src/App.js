import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Create, Show,Main, Nopage, Navbar, Footer, EditTask } from './components/index';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/home' element={<Main />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update' element={<EditTask />}></Route>
      <Route path='/show/:id' element={<Show />}></Route>
      <Route path='*' element={<Nopage />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
