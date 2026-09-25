import { Outlet } from 'react-router';
import './App.css'

import {Header, Footer} from '@core/components';

function App() {
  return (
    <>
      <div className="root">
        <Header/>
        
        <main className="content">
          <Outlet />
        </main>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
