import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import Items from './components/ItemList';
import Item from './components/Item';
import Home from './components/Home';
import EditItemForm from './components/EditItemForm';
import AddItemForm from './components/AddItemForm';


function App(props) {

  
  return (
    
      <div className="App">
        <Header />
        <div className="main-container">
        <Link to="/create">Add Item</Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={Items}/>
            
          
          <Route exact path="/items/:id" component={Item} />
          <Route exact path="/create" component={AddItemForm} />
          <Route exact path="/update" component={EditItemForm} />
          
          
            
          
          
        </Switch>  
      
        </div>
      </div>
    
  );
}

export default App;
