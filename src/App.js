import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Portfolio" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/React-Portfolio/home" element={<Home />}></Route>
          <Route path="/React-Portfolio/about" element={<About />}></Route>
          <Route path='/React-Portfolio/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
