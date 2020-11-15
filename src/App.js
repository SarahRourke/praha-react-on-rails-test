import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import Items from './components/ItemList';
import Item from './components/Item';
import Home from './components/Home';
import FormControl from './components/FormControl';
import EditItemForm from './components/EditItemForm';


function App(props) {

  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container">
        <Link to="/create">Add Item</Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={Items}/>
            
          
          <Route exact path="/items/:id" component={Item} />
          <Route exact path="/create" component={FormControl} />
          <Route exact path="/edit" component={EditItemForm} />
          
          
            
          
          
        </Switch>  
      
        </div>
      </div>
    </Router>
  );
}

export default App;
