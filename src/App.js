import './App.css';
import Footer from "./components/footer";

const arr = [...new Array(100)];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {arr.map((elem,idx) => {
          return (<div key={'elem-' + idx} className={idx%2 === 0 ?'odd':'even'}>{idx} {navigator.userAgent}</div>)
        })}
      </header>
      <Footer />
    </div>
  );
}

export default App;
