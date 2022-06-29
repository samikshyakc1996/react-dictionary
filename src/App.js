
import './App.css';
import Dictionary from './Dictionary';
import Footer from './Footer';

function App() {
  const defaultKeyword="sunset";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Dictionary App</h1>
        <Dictionary defaultKeyword={defaultKeyword}/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
