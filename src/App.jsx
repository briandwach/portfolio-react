// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {

  return (
    <div className="primaryBackground">
      <Header />
      <main> 
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App