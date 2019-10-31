import React from 'react';

function App() {
  const url = require('./components/lock.png');
  const signUrl = require('./Signup.js');
  
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
			<form action="" class= "form-group">
				<div class= "form-inline justify-content-center">
					<label for= "username" style ={{margin: 8 }}>Username </label>
					<input class="form-control" type="username"/>
				</div>
				<div class= "form-inline justify-content-center">
					<label for= "password" style ={{margin: 10 }}>Password</label>
					<input class="form-control" type="password"/>
				</div>
			</form>
		</div> 

		<div className= "next">
			<button type= "button" class= "btn btn-secondary">Login</button>
			<a href= {signUrl} class= "btn btn-secondary" style ={{margin: 10 }}>Sign Up</a>
		</div>

	 </div>
  );
}

export default App;
