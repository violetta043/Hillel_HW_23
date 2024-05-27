import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navitor/Navigator';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
        <Navigator /> 
      
     
        <Main />
      
      
    
    </div>
    
  );
}

export default App;
