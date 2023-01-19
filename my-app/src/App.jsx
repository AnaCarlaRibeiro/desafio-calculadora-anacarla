import Home from './Components/home/index'
import './App.css';
import { GlobalStyle } from './styles/root';



function App() {
  return (
    <>  

    <div className="App">
    <GlobalStyle/>
      <Home></Home>
    </div>
    
    </>
  );
}

export default App;
