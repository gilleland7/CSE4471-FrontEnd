import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sign from './Signup';
import Results from './searchResults';
import axios from 'axios';



function App() {  
   const center = {
 	  textAlign: "center"
   };
   
 //const axios = require('axios')  

  return (
	 <div style = {center} className = "Banner">				
		<div className= "next">			
			<Router>
				<Switch>
					<Route path="/" exact component ={Home} />
					<Route path="/Results" component={Results} />
					<Route path="/Sign" component={Sign} />					
				</Switch>
			</Router>
		</div>		
	 </div>
  );
}

function getUser(){	
	var user = document.getElementById("username");
	return user;
}
function getPassword(){
	var pass = document.getElementById("password");
	return pass;
}

function toSubmit(){
	
var check = axios.get('https://opposum-api.herokuapp.com/login?username='+getUser() +'&password='+getPassword(), {
	headers: {'Access-Control-Allow-Origin': '*'}
});		
	if (check){
		alert("YES");
	} else {
		alert("NO");
	}
}

const Home = () => (
	<div>				
		<nav className= "navbar navbar-dark bg-dark">		
			<span className= "navbar-brand">Inject Me Corp</span>			
			<Link to='/Results'>
			<form className= "form-inline">				
					<input className="form-control" type="search" placeholder="Search" aria-label="search"></input>
					<button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>				
			</form>	
			</Link>			
		</nav>			
		<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />	
		<div className= "container-fluid">
			<form onSubmit = {toSubmit} className= "form-group">
				<div className= "form-inline justify-content-center">
					<label htmlFor= "username" style ={{margin: 8 }}>Username</label>
					<input className="form-control" type="username" id="username"/>
				</div>
				<div className= "form-inline justify-content-center">
					<label htmlFor= "password" style ={{margin: 10 }}>Password</label>
					<input className="form-control" type="password" id="password"/>
				</div>
				<button type= "submit" className= "btn btn-secondary">Login</button>
			</form>
		
		<Link to='/Sign'>
			<button type= "button" className= "btn btn-secondary" style ={{margin: 10 }}>Sign Up</button>
		</Link>		
		</div> 
	</div>
);

export default App;