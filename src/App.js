import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sign from './Signup';
import Results from './searchResults';

function App() {
   const center = {
 	  textAlign: "center"
   };

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
	var user = (document.getElementById("username")).value;
	// var string = user.value
	return user
}
function getPassword(){
	var pass = (document.getElementById("password")).value;
	// var string = pass.value;
	return pass;
}

const axios = require('axios')


function results(){
	axios.get('https://opposum-api.herokuapp.com/login', {
			params:{
					username: getUser(),
					password: getPassword()
			}
		})
	.then(function(response){		
		window.name = getUser();			
		console.log(response.data); //RESPONSE.DATA is the true or false value, redirect to diff page here.
	})
	.catch(function(error) {
		console.log(error);
	});
}
function getSearch(){
	var search = (document.getElementById("searchID")).value;
	return search;
}

function search(){	
	axios.get('https://opposum-api.herokuapp.com/search', {
			params:{
					username: window.name,
					searchField: getSearch()
			}
		})
	.then(function(response){	
		window.name = window.name+"results="+response.data[1]; //Temporary
	})
	.catch(function(error) {		
		console.log(error);
	});
	
}

const Home = () => (
	<div>
		<nav className= "navbar navbar-dark bg-dark">
			<span className= "navbar-brand">Inject Me Corp</span>				
				<form onSubmit = {search} className= "form-inline">
						<input className="form-control" type="search" placeholder="Search" aria-label="search" id="searchID"></input>
						<Link to='/Results'>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
						</Link>
				</form>				
		</nav>
		<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
		<div className= "container-fluid">
			<form onSubmit = {results} className= "form-group">
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
