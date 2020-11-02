import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Items from './components/ItemList';
import Item from './components/Item';
import Home from './components/Home';


function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container">

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={Items}/>
            
          
          <Route exact path="/items/:id" component={Item} />
          
          
            
          
          
        </Switch>  
      
        </div>
      </div>
    </Router>
  );
}

export default App;
