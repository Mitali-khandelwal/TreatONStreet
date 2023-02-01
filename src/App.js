import About from './Component/About';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './Component/TocNav';
import Contact from './Component/Contact';
import Mission from './Component/Mission';
function App() {
  return (
    <div className="App">
      <BrowserRouter className='Browsing'>
        <Routes>
          <Route index element={<TopNav />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Mission' element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
