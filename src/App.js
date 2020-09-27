import React from 'react';
import './App.css';
import Feeds from './Components/Feeds';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import {useStateValue} from "./ContextApi/StateProvider"

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? ( <Login />) :
      (
      <>
      <Header />
      <div className="app-body">
      <Sidebar />
      <Feeds />
      <Widgets />
      </div>)   
      </>
      )}   
    </div>
  );
}

export default App;
