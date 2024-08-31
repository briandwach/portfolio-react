// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './index.css'


function App() {

  return (
    <div className="font-jakarta">
      <Header />
      <main className='min-h-[575px] mt-5 center:min-w-[580px] center:w-fit center:mx-auto'> 
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App