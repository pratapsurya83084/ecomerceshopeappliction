
import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './component/Navitems'
import Footer from './component/Footer'

// import './assets/css/icofont.min.css';
function App() {
  return (
<>

<Navitems/>
<div className="min-vh-100">
<Outlet/>
{/* render any page  below*/}

</div>

<Footer/>
</>
     

  );
}

export default App