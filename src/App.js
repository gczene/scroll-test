import './App.css';
import Footer from "./components/footer";

const arr = [...new Array(100)];

function App() {
  return (
    <div className="App">
      <div id={'fixed'} style={{position: 'fixed', top: 0, left: 0, backgroundColor: 'green', color: 'white'}}>HERE</div>
      <header className="App-header">
        {arr.map((elem,idx) => {
          return (<div key={'elem-' + idx} className={(idx%2 === 0 ?'odd':'even')}>{idx} {navigator.userAgent}</div>)
        })}
      </header>
      <Footer />
    </div>
  );
}

export default App;
