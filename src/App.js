import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import User from './components/users/User'
import Home from './components/layout/Home'

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="">
          <User />
        </div>
        
    </div>
  );
}

export default App;
