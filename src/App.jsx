// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css'

function App() {

  return (
    <div className="primaryBackground font-jakarta">
      <Header />
      <main> 
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App