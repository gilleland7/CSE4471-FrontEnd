import React from 'react';

function App() {
  const url = require('./components/lock.png');
  
   const center = {
 	  textAlign: "center"
   };

  return (
	 <div style = {center} className = "Banner">	
	 
		<nav class= "navbar navbar-dark bg-dark">
			<span class= "navbar-brand">Inject Me Corp</span>
			<form class= "form-inline">
				<input class="form-control" type="search" placeholder="Search" aria-label="search"></input>
				<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
			</form>
		</nav>
		
		<img src={url} style={{width: 150}} alt='Lock Logo' />

		<div class= "container-fluid">
			<form action="" class= "form-inline justify-content-center">
				<div class= "form-group">
					<label for= "username">Username</label>
					<input class="form-control" type="username"/>
				</div>
				<div class= "form-group">
					<label for= "password">Password</label>
					<input class="form-control" type="password"/>
				</div>
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
