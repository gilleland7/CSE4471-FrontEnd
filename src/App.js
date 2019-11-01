import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	
   const url = require('./components/lock.png');
  
   const center = {
 	  textAlign: "center"
   }   

  return (
	 <div style = {center} className = "Banner">		 
		<nav class= "navbar navbar-dark bg-dark">
			<span class= "navbar-brand">Inject Me Corp</span>

			<form class= "form-inline">
				<input class="form-control" type="search" placeholder="Search by user name" aria-label="search"></input>
				
					<button class="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
				
			</form>
		</nav>
		
		<div className = "Logo">
			<img src={url} style={{width: 150}} alt='Lock Logo' />
			<form class= "form-group">
				<form class= "form-inline">
					<label for= "username">Username</label>
					<input class="form-control" type="username"></input>
				</form>
				<form class= "form-inline">
					<label for= "username">Password</label>
					<input class="form-control" type="password"></input>
				</form>
			</form>
		</div> 

		<div className= "next">
			<button type= "button" class= "btn btn-secondary">Login</button>
			<button type= "button" class= "btn btn-secondary">Sign Up</button>
		</div>
	 </div>
  );
}

export default App;
