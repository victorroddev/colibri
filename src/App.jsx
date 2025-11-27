import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App(){
  return(
    <div>
      <main>

        <Navbar />

        <Outlet />

        <Footer />
      </main>
    </div>
  )
}

export default App;