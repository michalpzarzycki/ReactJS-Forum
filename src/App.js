import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import MainPage from './components/MainPage'
import ForumHeader from './components/ForumHeader'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-container">
          <ForumHeader />
            <Switch>
              <Route exact path="/" component={MainPage}/>
            </Switch>
            <Footer />
          </div>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
