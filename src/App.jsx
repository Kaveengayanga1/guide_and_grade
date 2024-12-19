import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Summary from './pages/Summary'
import Analyze from './pages/Analyze'
import Timer from './pages/Timer'

function App() {
  const [component, setComponent] = useState(<Home/>);

  // Function to change the page component
  function pageRouterSetter(selectedMenuItem) {
    console.log(`${selectedMenuItem} page selected`);
    switch (selectedMenuItem) {
      case 'home': {
        setComponent(<Home />);
        break;
      }
      case 'summary': {
        setComponent(<Summary/>);
        break;
      }
      case 'analyze': {
        setComponent(<Analyze setTimer={pageRouterSetter}/>);
        break;
      }
      case 'about': {
        setComponent(<About/>);
        break;
      }
      case 'timer': {
        setComponent(<Timer/>);
        break;
      }
      default: {
        setComponent(<Home />);
        break;
      }
    }
  }

  return (

    <div>
      <Navbar getPageForRouting={pageRouterSetter} />
      {component}


    </div>
  )
}

export default App;
