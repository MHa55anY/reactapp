import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import First from  './components/first.component'
import Second from './components/second.component'
import './styling/home.css'
import Third from  './components/third.component';

import Split from 'react-split'
function App() {
  return (
    <div className="App">
      <Split direction='vertical' style={{height:"100%"}}>
    <div className = "upper"> 
      <Split    className="split">
        <First></First> 
        
        <Second></Second>
      </Split>
    </div>

        <div class="below">
        <Third></Third>
        </div>
      </Split>
    </div>
  );
}

export default App;
