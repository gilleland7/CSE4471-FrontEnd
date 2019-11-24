//Main front end page
//Uses React Framework  https://reactjs.org/
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Sign from './Signup';
import Results from './searchResults';

//What runs when the application starts up
function App() {
   const center = {
 	  textAlign: "center"
   };

//Uses React Router to link pages together
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

//Gets the username entered in the login field
function getUser(){

	var user = (document.getElementById("username")).value;
	return user
}

//Gets the password entered in the login field
function getPassword(){

	var pass = (document.getElementById("password")).value;
	return pass;
}

const axios = require('axios') //Uses Axios libray to handle HTTP requests, https://github.com/axios/axios

//HTTP Request for user login
function results(){
		axios.get('https://opposum-api.herokuapp.com/login', {
				params:{
						username: getUser(),
						password1: getPassword()
				}
			}, {timeout:1})
		.then(function(response){ //Promise

			//Window.name persists between pages, used to store login success
			window.name = getUser()+"?"+response.data.success;
			console.log(response.data.success);

			//If login failed due to wrong password
			if(!response.data.success){
				alert("Wrong username/password");
				window.location.reload(false); //Reload page if login fails
			} else { //If logged in
				alert("We sent you a code");
				console.log("Success");


			}
		})
		.catch(function(error) {
			console.log(error);
		});

}

//Get what field is being searched for
function getSearch(){
	var search = (document.getElementById("searchID")).value;
	return search;
}

//Runs the HTTP request to search
function search(){
	//var loggedIn;
	var data = window.name.substring(window.name.indexOf('?')+1); //Gets status of login

	//If login failed
	if (data === ''){
		alert("ERROR - Must be logged in to search");
		//loggedIn = false;
	//If login succeeded
	} else {
		//loggedIn = true;
		alert(window.name);
	axios.get('https://opposum-api.herokuapp.com/search', {
			params:{
					//Need to remove the login check
					username: window.name.substring(0,window.name.indexOf('?')),
					searchField: getSearch()
			}
		})
	.then(function(response){ //promise
			//Need to get rid of the login check
			var index = window.name.indexOf("?");
			var name = window.name.substring(0,index);

			//See if login suceeded first
			checkLogIn();
			//Put the data here
			window.name = name+"results="+response.data[1]+"?"+data;
	})
	.catch(function(error) {
		console.log(error);
	});
	}

	//Returns false so promise always finishes
	return false;
}
//Checks if login succeeded
function checkLogIn(){
	//Get the status of login
	var data = window.name.substring(window.name.indexOf('?')+1);

	if (data === true ){
		//window.name is now just username
		window.name = window.name.substring(0, window.name.indexOf('?'));
	}

	//Needs to always finish, so return false
	return false;
}


//Dual authentication request
function authenticate(code){
	alert(code);
}

//HTML
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
			<form  className= "form-group">
				<div className= "form-inline justify-content-center">
					<label htmlFor= "username" style ={{margin: 8 }}>Username</label>
					<input className="form-control" type="username" id="username" required/>
				</div>
				<div className= "form-inline justify-content-center">
					<label htmlFor= "password" style ={{margin: 10 }}>Password</label>
					<input className="form-control" type="password" id="password" required/>
				</div>
				<button type= "submit" className= "btn btn-secondary" style ={{margin: 10 }} onClick={results}>Login</button>
				<Link to='/Sign'>
					<button type= "button" className= "btn btn-secondary" style ={{margin: 10 }}>Sign Up</button>
				</Link>
			</form>
		</div>
	</div>
);

export default App;
