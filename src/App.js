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
	return user
}
function getPassword(){
	
	var pass = (document.getElementById("password")).value;
	return pass;
}

const axios = require('axios')

function results(){

		axios.get('https://opposum-api.herokuapp.com/login', {
				params:{
						username: getUser(),
						password: getPassword()
				}
			}, {timeout:1})
		.then(function(response){
			
			window.name = getUser()+"?"+response.data.success;
			console.log(response.data.success);

			if(!response.data.success){
				alert("Wrong username/password");
				window.location.reload(false); //Reload page if login fails
			} else{
				alert("Success");
				console.log("Success");
			}
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
	//var loggedIn;
	var data = window.name.substring(window.name.indexOf('?')+1); //Gets status of login

	if (data === false){
		alert("ERROR - Must be logged in to search");
		//loggedIn = false;
	} else {
		
		//loggedIn = true;
	axios.get('https://opposum-api.herokuapp.com/search', {
			params:{
					username: window.name,
					searchField: getSearch()
			}
		})
	.then(function(response){
			var index = window.name.indexOf("?");
			var name = window.name.substring(0,index);


			window.name = name+"results="+response.data[1]+"?"+data;
			checkLogIn();


			window.name = name+"results="+response.data[1]+"?"+data;
	})
	.catch(function(error) {
		console.log(error);
	});
	}

	return false;
}

function checkLogIn(){
	var data = window.name.substring(window.name.indexOf('?')+1);

	if (data === true ){
		window.name = window.name.substring(0, window.name.indexOf('?'));
	}
	return false;
}

const Home = () => (
	<div>
		<nav className= "navbar navbar-dark bg-dark">
			<span className= "navbar-brand">Inject Me Corp</span>
				<form action ='./Results' onSubmit ={search} className= "form-inline">
						<input className="form-control" type="search" placeholder="Search" aria-label="search" id="searchID" required/>
							<button className="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
				</form>

		</nav>

		<img src={ require('./components/lock.png')} style={{width: 150}} alt='Lock Logo' />
		<div className= "container-fluid">
			<form onSubmit = {results} className= "form-group">
				<div className= "form-inline justify-content-center">
					<label htmlFor= "username" style ={{margin: 8 }}>Username</label>
					<input className="form-control" type="username" id="username" required/>
				</div>
				<div className= "form-inline justify-content-center">
					<label htmlFor= "password" style ={{margin: 10 }}>Password</label>
					<input className="form-control" type="password" id="password" required/>
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
