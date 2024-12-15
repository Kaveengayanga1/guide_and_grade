import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Summary from './pages/Summary'
import Analyze from './pages/Analyze'
import Timer from './pages/timer'

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
        setComponent(<Analyze/>);
        break;
      }
      case 'about': {
        setComponent(<About/>);
        break;
      }
      default: {
        setComponent(<Home />);
        break;
      }
    }
  }

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Guide and Grade</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <div>
      <Navbar getPageForRouting={pageRouterSetter} />
      {component}


    </div>
  )
}

export default App;
