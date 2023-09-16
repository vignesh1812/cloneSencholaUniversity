import './App.css';
import Contactus from './Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Whysenchola from './Whysenchola';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar/>
        <Routes>
          <Route path='/contactus' element={<Contactus />}/>
          <Route path='/whysenchola' element={<Whysenchola />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
