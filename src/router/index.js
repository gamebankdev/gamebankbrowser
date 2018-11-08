import React from "react";
import {HashRouter as Router,Route} from 'react-router-dom';
import Index from '../routes/index'
export default ()=>{
  return (
    <Router>
      <Route exact path="/" component={Index}  />
    </Router>
  )
}